const express = require("express");
const app = express();
const port = 3000;

// Main route
app.get('/', (req, res) => {
    res.send("Hello world!");
})

//addition endpoint
app.get("/add/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA + numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//subtraction endpoint
app.get("/sub/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA - numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//multiplication endpoint
app.get("/mult/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA * numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

//division endpoint
app.get("/div/:num1/:num2", (req, res) => {
    numA = Number(req.params.num1);
    console.log(numA);

    numB = Number(req.params.num2);
    console.log(numB);

    if(Number.isNaN(numA)){
        console.log("ERROR: First parameter is not a number.");
        res.send("ERROR: First parameter is not a number.");
    } else if (Number.isNaN(numB)) {
        console.log("ERROR: Second parameter is not a number.");
        res.send("ERROR: Second parameter is not a number.");
    } else {
        result = numA / numB;
        console.log(result);
    
        res.send(String(result)); // Returns as string, otherwise interpreted as an HTTP status code
    }
})

app.listen(port, () => {
    console.log("Listening on port " + port);
})