// DataBase Config 

const express =  require('express');
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


const mongoURI = 'mongodb://hemachandranhema8754_db_user:F09oZcrRvHjg9hvj@cluster0-shard-00-00.62bc372.mongodb.net:27017,cluster0-shard-00-01.62bc372.mongodb.net:27017,cluster0-shard-00-02.62bc372.mongodb.net:27017/hema-db?ssl=true&replicaSet=atlas-62bc37-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(mongoURI)
 .then(() => console.log(' MongoDB Connected to Hema_DB!'))
 .catch(err => {
    console.log('DB Connect  Error :');
    console.error(err);
 });

//User router

app.use('/api/posts', postRoutes)



app.listen(PORT, () => console.log (`Server Runing on Port ${PORT}`))



//http://localhost:8000/api/posts