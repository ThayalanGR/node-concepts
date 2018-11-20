# node-concepts

Node.js

Important core modules
[x]http
[x]os 
[x]path
[x]process
[x]query strings
[x]stream

module wrapper function
(function(module, exports, require, __filename, __dirname) {  } )

Restful APIs
 Respresentational state tranfer
 crud operation
 endpoints
 http://domain.com/api/customers
 customers - resources
  http methods
GET  /api/customers/1 - id of customer in url
POST /api/customers  - include body { id :2, ..}
PUT  /api/customers/1  - with body { id : 2, ..}
DELETE /api/customers/1 - simply deletes

express.js
app.get();
app.post();
app.put();
app.delete();
on application grows it is tedious to maintain flow of routes so it is suggested to use respective directory for respective routes.

Json
JSON.stringify([1,2,3])  //may useful

nodemonitor
nodemon 

Process environment port
const port = process.env.PORT || 3000;

   //400 - bad request
//handling post request
// input validation in get request 

// never ever trust client

// validation logic

//for getting or parsing values from body which is in json encoded format

app.use(express.json());

Joi npm package 
validation handler
const Joi = require('joi');
initialize the schema for the joi


always include dependencies at top of the script




