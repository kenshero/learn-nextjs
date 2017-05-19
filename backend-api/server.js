// server.js
const express = require('express');
const graphqlHTTP = require('express-graphql');
var cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
const PORT = process.env.port || 3000
const MyGraphQLSchema = require('./graphqlconf/schema');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema: MyGraphQLSchema,
  graphiql: true
}));

app.post('/create_news', function(req, res){
  console.log(req.body)
  res.send('hello world');
});

app.listen(PORT);
console.log("Server running on localhost:", PORT);