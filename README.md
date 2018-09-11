# Migration Station Full Stack Website 


## Prerequisites

*MongoDB
*Node
*Nodemon

## Installation

1. Install all dependencies from the server level `yarn install`

2. Install all dependencies from the client level `cd client && yarn install`

3. Use nodemon to start the express server `forever -c "nodemon --exitcrash" server.js`. Nodemon will listen for any changes to the server file and automatically update. Forever will keep the application up and running should it terminate for any reason.

4. Start the client server `cd client && yarn start`
