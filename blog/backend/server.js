// DataBase Config 

const express =  require('express');
require('dotenv').config();
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const cors = require('cors');


// express App Call Function

const app  = express();
const PORT = process.env.PORT  || 8000 ;


//Middlewere

app.use(cors());

app.use(bodyParser.json()) ;


// Connect  to MongoDB  

// Connect to MongoDB using Environment Variable 

//const mongoURI = process.env.MONGO_URI;
const mongoURI = process.env.MONGO_URI || 'mongodb://hemachandranhema8754_db_user:F09oZcrRvHjg9hvj@ac-cdvwql2-shard-00-00.62bc372.mongodb.net:27017,ac-cdvwql2-shard-01.62bc372.mongodb.net:27017,ac-cdvwql2-shard-02.62bc372.mongodb.net:27017/?ssl=true&replicaSet=atlas-fmbi4s-shard-0&authSource=admin&appName=Cluster0';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB Connected to Hema_DB!'))
  .catch(err => console.error('DB Connection Error:', err));
//User router

app.use('/api/posts', postRoutes)



app.listen(PORT, () => console.log (`Server Runing on Port ${PORT}`))



//http://localhost:8000/api/posts