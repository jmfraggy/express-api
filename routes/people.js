/**
 * API for Pople
 * All the People in the system are here
 * author: Fragyy
 */

 var express = require('express'); // Our Server
 var api = express.Router(); // Generates API Routes

 api.use(express.json()); // Activate Json
 api.use(express.urlencoded({ extended : true })) //decoder

 // API & HTTP Methods 
 // POST, GET, PUT & DELETE
    
    const person = {
        id : "-k00-1",
        name: "Jose Fragoso"
    };

 // GET Method
    api.get("/", function(req, res , next){
        console.log(person);
        console.log("API GET PEOPLE");
        res.json(person);
    });

 // POST Method
    api.post("/", function(req, res, next){

        console.log("Body");
        console.log(req.body);
        console.log("Queries");
        console.log(req.query);
        console.log(req.query[0]);
        console.log(req.query[1]);
        res.send({
            idSent: req.query.id,
            nameSent : req.query.name,
            success : true
        });
    });
 // PUT Method
    api.put("/", function(req, res, next){

        console.log("Yo're using the PUT");

        res.send({
            message : "This is the PUT Method"
        });
    });
 // DELETE Method
    api.delete("/", function(req, res, next){
        
        console.log("Yo`re using the DELETE");

        res.send({
            message : "This is the DELETE Method"
        });
    });
// Everytime we use the server, the router move from methods with next.

module.exports = api;
