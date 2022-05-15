import { aws_s3, Stack, StackProps,aws_lambda as lambda, aws_dynamodb as dynamodb } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as deploy from "aws-cdk-lib/aws-s3-deployment"
import * as cloudFront from "aws-cdk-lib/aws-cloudfront";
import { LambdaToDynamoDBProps,  LambdaToDynamoDB } from "@aws-solutions-constructs/aws-lambda-dynamodb"
import * as cdk from "aws-cdk-lib"
import { AttributeType } from 'aws-cdk-lib/aws-dynamodb';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkStack extends Stack {

  constructor(scope: Construct, id: string) {
    super(scope, id);

    
    const siteBucket = new aws_s3.Bucket(this, 'sitebucket', {
      bucketName:'googlescholarbucket',
      websiteIndexDocument:'index.html',
      websiteErrorDocument:'index.html',
      publicReadAccess:true,
      removalPolicy:cdk.RemovalPolicy.DESTROY
    })

      // Create a new CloudFront Distribution
      const distribution = new cloudFront.CloudFrontWebDistribution(
        this,
        `myreactapp-cf-distribution`,
        {
          originConfigs: [
            {
              s3OriginSource: {
                s3BucketSource: siteBucket
              },
              behaviors: [
                {
                  isDefaultBehavior: true,
                  compress: true,
                  allowedMethods: cloudFront.CloudFrontAllowedMethods.ALL,
                  cachedMethods:
                    cloudFront.CloudFrontAllowedCachedMethods.GET_HEAD_OPTIONS,
                  forwardedValues: {
                    queryString: true,
                    cookies: {
                      forward: "none"
                    },
                    headers: [
                      "Access-Control-Request-Headers",
                      "Access-Control-Request-Method",
                      "Origin"
                    ]
                  }
                }
              ]
            }
          ],
          comment: `myreactapp - CloudFront Distribution`,
          viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
        }
      );


    // Setup Bucket Deployment to automatically deploy new assets and invalidate cache
    new deploy.BucketDeployment(this, `myreactapp-s3bucketdeployment`, {
      sources: [deploy.Source.asset("../build")],
      destinationBucket: siteBucket,
      distribution: distribution,
      distributionPaths: ["/*"]
    });

    new cdk.CfnOutput(this, "CloudFront URL", {
      value: distribution.distributionDomainName
    });


    const props: LambdaToDynamoDBProps = {
      lambdaFunctionProps: {
          runtime: lambda.Runtime.NODEJS_14_X,
          // This assumes a handler function in lib/lambda/index.js
          code: lambda.Code.fromAsset(`${__dirname}/lambda/index.zip`),
          handler: 'index.handler',
      },
      dynamoTableProps: {
        tableName: 'scholardb',
        partitionKey: {name:'id',type:AttributeType.STRING}
      }
    };
    
    new LambdaToDynamoDB(this, 'dynamo-lambda-comb', props, );
    
  }
}
