## Assignment

### Brief

In this assignment, create an end to end node.js application with the following API Endpoints:


|#|Path|Description|
|-|----|-----------|
|1|POST /register | Takes in `email` and `pwd`, hash the value for password and store them in database.|
|2|POST /login | Takes in `email` and `pwd`, verify the hash and returns whether login success or fail. It should produce a JWT that encodes `id` and `email` in a json object and return it in HTTP Response|

The priority of this assignment is to practice hashing and JWT, hence the assignment is split into two parts.

### Part 1 - Create endpoint with Express and store email and pwd in an array.

Store `email` and `pwd` as object in array. For the JWT signing, simply use algorithm using a secret of your choice.

### Part 2 - Create ORM Layer and Database

Once you have produced the two endpoints by storing them in array, you may go ahead to create the ORM layer. You are recommended to use [sqlite::memory](https://sequelize.org/master/manual/getting-started.html).

```
npm install sequelize sqlite3
```

```js
const sequelize = new Sequelize('sqlite::memory:');
```

This way, the ORM model do not have dependency on any database. It will store data in memory.

### Submission 

- Submit the URL of the GitHub Repository that contains your work.
- Should you reference the work of your classmate(s) or online resources, give them credit by adding either the name of your classmate or URL. 

### References

_Example of Referencing Classmate_

Referenced the code block below.
```js
    function printMe(){
        console.log("I am a reference example");
    }
```

_Example of Referencing Online Resources_

- https://developer.mozilla.org/en-US/
- https://www.w3schools.com/html/
- https://stackoverflow.com/questions/14494747/how-to-add-images-to-readme-md-on-github

