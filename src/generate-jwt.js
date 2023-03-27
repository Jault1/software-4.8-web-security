const jwt = require("jsonwebtoken"); // Import
const secret = "This is our secret";

// The data to be used for generating JWT
const mockLoginData = {
    accountId: 1,
    email:"brandon@mail.com",
    permissions:{
        role:"ADMIN",
    }
}

// Generate token with the above data. 
const token = jwt.sign(mockLoginData, secret, {expiresIn:"1d"});
console.log(token);