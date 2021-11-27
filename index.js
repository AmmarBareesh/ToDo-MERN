const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const app = express();
const todos = require('./routes/todos');
const dotenv = require("dotenv");


var cors = require('cors');

// Allowing Access-Control-Allow-Origin cors for access from client
app.use(cors()); 
// const db = require('./config/database');
dotenv.config();

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;

// Connect to mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log('MongoDB is Connected..'))
.catch(err => console.log(err));

app.use(express.json());
app.use('/api/todos', todos);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'./client/build')));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname ,'client','build','index.html'));
    })
} else{
    app.get('/', (req,res) => {
        res.send('Api is running');
    })
}

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening on port ${port}...`));