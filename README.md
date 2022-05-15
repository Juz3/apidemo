# apidemo

Node.js REST API + React UI demo 05/2022

Application that calculates prime numbers from user input.

API routes:

GET `{apiBaseURL}/api/checkprime/{input}`

GET `{apiBaseURL}/api/sumandcheck/{input}`

## Install instructions

Run `npm install` in root directory and in ./client directory

## How to run

Run `npm run both` in root directory. This will start both applications.
Backend will use port 5000, frontend will use port 3000.

## Hosting suggestions

### Azure

Azure App Services can be used for node.js applications. This can be used for both the node.js backend and React frontend.

https://docs.microsoft.com/en-us/azure/app-service/

https://docs.microsoft.com/en-us/azure/app-service/quickstart-nodejs?tabs=windows&pivots=development-environment-vscode
