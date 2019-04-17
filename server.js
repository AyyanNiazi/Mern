const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users")
const app = express();

//body parser middleware

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)
app.use(
    bodyParser.json()
);


//Databse config
const db = require('./config/keys').mongoURI
// const db = "mongodb://ayyan:ayyan123@ds237641.mlab.com:37641/first-database"

//connect to Mongo db 
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        
    }
).then(() => console.log("mongo db succesfully connected"))
.catch((err) => console.log("mongo db connection failed due to: ",err))

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport");

//routes
app.use("/api/users", users)

//server seetings
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`) ) ;

