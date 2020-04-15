# Maleon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

Had to use Intl.js polyfil cdn to work on IE 10 (Not Sure if I would have needed for others)-
Check index file for link

## Project with prendering
*nvm use 9.11.2*

*Run npm build*

There is a post build script that runs automatiaclly runs prerender code, which places all required files in a dist folder
To update/add files, please refer to this code to add to the array

There is a server folder that houses the api for the twitter feed, which is hosted on heroku, any chanes made here will have to be upladed there

To view prerendering cd into dist folder and run npm http-server (http://127.0.0.1:8080/)

Will need to install if needed npm i -g http-server
