# Movie Manager Exercise

Movie Manager Exercise is a MEAN web application built with a custom responsive design demonstrating MVC in the Javascript world.

MongoDB, ExpressJS, [AngularJS](https://angularjs.org/), NodeJS

Demo: http://moviemanager.musto.io:8080

Notes: [DEVELOPMENTNOTES.MD](docs/DEVELOPMENTNOTES.MD)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Note: I've only setup and tested running locally on my MacOS all though it should easily run on a PC as well. (See startApp.bat)

### Prerequisites

What things you need to install the software and how to install them

```
If you want to review and develop locally you will need the following installed:  (Latest versions should be fine)
* NodeJS
* MongoDB

```

### Installing

A step by step series of examples that tell you have to get a development env running


```
* git clone a local copy from this repo
* run npm install to install all dependencies
* open a terminal and run npm start

Configuration (Settings in /config/default.json)
{
    "server": { // Node server
        "env": "development",
        "host": "localhost",
        "port": 8080
    },
    "db": { // DB Config not currently being used
        "host": "localhost",
        "port": "27017",
        "table": "movieManager"
    },
    "directories": {
        reports: "database/reports/"
    },
    "tmdbAPI": { // Credentials for TMDB API
        "url": "https://api.themoviedb.org/3/search/movie?api_key=",
        "api_key": "28487f78ee09a45ef3ca72bdf4957ccd"
    }
}



```

## Authors

* **Armando Musto - armando.musto@gmail.com**
