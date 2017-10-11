# Development Notes

Oct 11th - Completed today
* Provided overview on requirements, estimate for completion.
* Created github repo, added Amy as a collaborator
* Setting up initial development environment (Locally and Remote)
    * Local development: Install NodeJS, clone repo and npm install
    * Remote hosting: Bitnami instance (MEAN)
    * git clone repo, setup to pull from repo (Manually for now)
    * Update DNS, added alias moviemanager.musto.io to point to new AWS instance
* Outlining initial tech stack:
    * Use node_modules over bower_components
    * Begin thinking about models for MongoDB
* Create Angular skeleton, routes, dependecies today. Run locally with live_server till I create the back end server.

Notes:
* My intention is to provide a complete application that provides backend and front end via Node and Express. The application will provide API access for most remote resources and logic.
* Regarding existing legacy systems, we might look to [Amazon API Gateway](https://aws.amazon.com/api-gateway/) as a way to provide a common API gateway.
* I will provide manual deployment but will research how best I can easily setup CD if time allows.

**TODO:**

Due by end of today Oct 11, send following to Amy:
* Technical Stack & details (Outline tech stack, any other details)
* Github location and access
* Hosting location (AWS, setup CI and CD)
Note: Provide as much documentation in the github readme.md



