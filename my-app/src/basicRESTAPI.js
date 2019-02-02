//const stringify = require('flatted/cjs');
//const parse = require('flatted/cjs');
const express = require('express');
//const bodyParser = require('body-parser');
const mysql = require('mysql');

//const rateLimit = require('express-rate-limit');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //password: 'password',
    database: 'reactworkshop',
    port: 3306
});
const router = express();

//limit amount of times API can be accessed in a certain window of minutes
/*const apiLimiter = rateLimit({
    windowMs: 2*60*1000,
    max: 20
}); //20 per 2 mins*/


function validUser(){
    //check if input is valid
}

//modular function to execute any queries
let executeQuery = function(res, query) {
    connection.query(query, function(err, results) {
        if (err) {
            console.log("Error while querying database :- " + err);
            throw err;

        }
        else {
            res.json({
                data: results
            });
            console.log(results)
        }
    });
};

//head of API
router.use("/",/* apiLimiter, */function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});

router.get("/", (req, res) => {
    //Query DB for contact list
	let query  = "SELECT * FROM contacts"
	executeQuery(res, query);
});

router.post('/addContact', (req, res, next) => {
    //Add new row into DB containing contact info
});

router.post('/login', function(req, res, next) {
    //Query DB to see if login info matches
});


//start API on server
router.listen(3001, () => {
    console.log('Go to http://localhost:3001')
});

module.exports = router;
