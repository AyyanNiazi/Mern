const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const proxy = require('http-proxy-middleware');
const passport = require("passport");
const cors = require("cors");
// const users = require("./routes/api/users")
const config = require('config');
const app = express();
app.use(cors())
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
const db = config.get('mongoURI'); //this is because we dont show to anyone our mongo uri file pubic 
// const db = "mongodb://ayyan:ayyan123@ds237641.mlab.com:37641/first-database"

//connect to Mongo db 
mongoose.connect(
    db,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        
    }
).then(() => console.log("mongo db succesfully connected"))
.catch((err) => console.log("mongo db connection failed due to: ",err))

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport");

//routes
app.use('/api/users/register',  require("./routes/api/register") )
app.use('/api/users/login',  require("./routes/api/login") )

//server seetings
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running on port ${port}`) ) ;

