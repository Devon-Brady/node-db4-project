const express = require("express");
const server = express();
const recipesRouter = require('./recipes/recipes_router');

server.use(express.json());
server.use('/api/recipes',recipesRouter)

server.get('/',(req,res)=>{
    res.send(`<h2>Welcome to your cookbook api!</h2>`)
});

module.exports = server;