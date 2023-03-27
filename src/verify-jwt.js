//verify-jwt.js
const jwt = require("jsonwebtoken"); // Import
const secret = "This is our secret";
const token = process.argv[2]; // Input argument

// Decrypt the given token
jwt.verify(token, secret, function(err, decoded){
    if(err){
        console.error(err);
        return;
    }
    console.log(decoded); 
});