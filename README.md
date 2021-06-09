# Lingumi Video Library

## Introduction

The proposed task is to create a web or mobile app for retrieving and displaying video tutorial information for users. Understanding that Vid-Tutorial has a wide collection of video tutorials covering various
topics. Each video tutorial is taught by one of several different teachers. 

Project features include, but are not limited to:
* Downloads a list of video tutorials via JSON data file
* Refresh capability to obtain most up to date video information
* Allows "Top 20" search feature for rated video tutorials and searches that match user search terms
* Unit tests

## A Supporting Project Kanban
```sh
The supporting project Kanban may be viewed at (https://github.com/SusanLuebke/Lingumi_video_library/projects/1)
```
## Instructions on how to run the project
### `prerequisites`
```sh
* Node.js (for npm)
* A web browser
```
### `installations`
```sh
npm install
npm install --save superagent
npm install bootstrap
npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
```
### `npm start`
```sh
Run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
```
### `npm test or yarn test`
```sh
Launch unit tests using Jest and enzyme; which complement each other well with Jest as a simple test runner and Enzyme a library used to test React applications.
```
### `yarn build`
```sh
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```
### `yarn eject`
```sh
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
```

