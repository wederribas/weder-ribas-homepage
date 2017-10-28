## My Personal Page

[![Build Status](https://travis-ci.org/wederribas/weder-ribas-homepage.svg?branch=master)](https://travis-ci.org/wederribas/weder-ribas-homepage)
[![GitHub issues](https://img.shields.io/github/issues/wederribas/weder-ribas-homepage.svg)](https://github.com/wederribas/weder-ribas-homepage/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wederribas/battle-of-coders/master/LICENSE.md)

Welcome! That's the source code for personal website. It's under development now. So, take a coffee and come back later to see more code. ;-)

## Requirements

This project was purely build with React, so the only dependencies required are:

* Node (version 6 or higher)
* npm

## Application Structure

1. Configuration files:

    * `webpack.conf.js`
    
        This file contains all Webpack confs to build the project bundles. The babel preset confs, as well as the production build settings could be found here.
    
    * `package.json`

        Contains all **npm** specifc confs. Here you'll find the project dependencies, the development dependencies and the scripts to build both development and production bundles.
    
2. Entry points:

    * `app/index.html` and `app/index.js`

        These files are the application entry-points, where the Web Server will start serving the application and also the React DOM render invocation.

3. CSS and Image files could be found at `app/css` and `app/images`

4. Finally, the React components could be found at `app/components` (kinda redundant, uh?)


## Building

First, clone the repo locally:

`git clone https://github.com/wederribas/weder-ribas-homepage.git`

Then, go to the project folder and install the project dependencies with:

`npm install`

Once finished the installation, you could start the development server with:

`npm run start`

Or, you could build the production bundler with (notice that the prod builds will be stored in a new dir called `dist/`):

`npm run build`

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/wederribas/weder-ribas-homepage/blob/master/LICENSE)
