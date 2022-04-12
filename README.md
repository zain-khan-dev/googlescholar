# What is this

This project is a simple demo for fetching and displaying books from google books api and publishing the results to a mongo database.

# Features

- Allows user to sign-in with Google SSO 
- Lets user search for books with the query, displays searched books in a visual manner
- Lets user see basic details about the selected book. 
- Written in modern react using only functional components.
- React state management using Redux


# Routes

Routes are handeled using react-router-dom library
The app has the following routes

## `/`
This is the homepage route which will display a google login button. Once we login successfully the page redirects to /search route to let user search the books

## `/search`
This route allows users to search books in a visual manner. As user types in the search bar it detects an input and using throttling algorithm it makes search keeping the api call frequency low as well as having no reduction in user experience. When clicked on a searched book it takes the user to a detailed view of that book. Each search query of the user is being persisted in a database.

## `/book/:id`
Displays a detailed view of the book based on its id. It displays basic info such as Description, Author, Publishing Date, Genere, more can be added on requirement basis.


# Database

I are using mongodb cluster to host the database to persist the search queries made by the user. The database is NOSQL and saves each record as a document in a collection. The document has a key, value pair. For each query we are persisting the name, email, googleId and searchQuery made by that user.

Since we dont have any backend running to make connections to the database. We have utilised AWS LAMBDA function to make the connection and have made it public through AWS API Gateway. AWS LAMBDA receives the details for the search query through an API call. Then the defined lambda function make connection to mongodb and serializes the body of the api call to insert the document into the collection.



# Where is it deployed

## `Prod`
This app is deployed on AWS using AWS Amplify you can see the live preview of this app here
[View Live demo](https://main.d2vs1hmtn180cz.amplifyapp.com/)


## `Staging`
We also have a staging build for this application that we can access here. The staging preview is password protected.
[View Staging](https://stage.d2vs1hmtn180cz.amplifyapp.com/)



# Setting up locally
You can also set this repo locally. Just follow the following steps.

- Clone the git repo. Using git clone https://github.com/zain-khan-dev/googlescholar.git
- Copy the .env file to the root of the directory using .env.example as a reference
- Run npm install
- npm start
- App should now be running on http://localhost:3000



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
