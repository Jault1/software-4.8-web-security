const bcrypt = require('bcrypt'); 
const saltRounds = 10; 
const plainText = process.argv[2]; // Taken from command

bcrypt.hash(plainText, saltRounds, function(err, hash){
    
    // A callback function called after hash() completes.    
    if(err){
        console.error(err);
        return;
    }
    console.log(hash);
});