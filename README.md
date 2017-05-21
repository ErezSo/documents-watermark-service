# Watermrker

Watermrker is a RESTful Express.js service, that recieves documents and creates a customizable watermark for each document.


### Setting up

Watermrker requires [Node.js](https://nodejs.org/) v6.4+ to run.

After installing Node.js run:

```sh
$ npm install
```

In order to use the service first create a mongoDB hosting account and a collection (possible in [mLab](https://mlab.com/) - [Quick start guide](http://fredrik.anderzon.se/2017/01/17/setting-up-a-free-mongodb-database-on-mlab-and-connecting-to-it-with-node-js/)).
Create a .env file in the project an assign the secret access key to a MLAB_SECRET_KEY variable.

Example: 

```sh
MLAB_SECRET_KEY=mongodb://<dbuser>:<dbpassword>@dsxxxxxx.mlab.com:49207/watermarker
```


### Run the service

```sh
$ npm start
```

The command starts the server on port 3002. 

Afterwards the user can manually test it by entering a POST request to `document/:documentType` with a body that includes author, title and topic properties (topic is not required). 

After sending the POST request the user gets a response of a ticket id with which they can send a GET request to `status/:ticketId` to retrieve the document. A watermark property in the retrieved document object indicates that the Watermarker finished the process succesfully.


### Run unit tests

```sh
$ npm test
```