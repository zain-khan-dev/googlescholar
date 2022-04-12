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

## AWS
AWS Amplify is used to host the applciation. This provides CI/CD pipeline that integrates with github and builds automatically on code commits.

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




# Directory Structure



| File/Folder | Description |
| :--- | :--- |
| Component| This is used to create stand alone components that are used by either Container or other componenets |
| Container | This contains concrete containers that are pages to be rendered on each route|
| Reducer | This contains actions and reducer for configuring redux store|
| common | The common module that contains functions and constans that are commonly used throughout the application |
| Container/Home.js | The homepage of the application that prompts user to signin|
| Container/Search.js | This page include a search bar that allows user to search for books in a visual manner |
| Container/DetailedBook.js | This page include a detailed view of the book selected from the search page. |
| Components/BookCover.js | This include image component for the book cover in detailed book page |
| Components/BookHeader.js | This is the component used in the book cover in detailed book page |
| Components/BookMetadata.js | This component layout the metadata in the detailed book which shows author name, published date, genres |
| Components/BookSearchView.js | This component layout the images that are received from the search through api in a visual manner |
| Components/Login.js | Component that is used to login  Google SS0 |
| Components/Logout.js | Component used to logout Google SSO |
| Componenets/WelcomeBoard.js | Displays a welcome message on homepage |
| common/Constants | Constants that are used throughout the project |
| common/utils.js | Contains common utlity functions to post metrics to lamdbda function and get api data |
