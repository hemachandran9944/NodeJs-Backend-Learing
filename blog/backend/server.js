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

// Connect to MongoDB using Environment Variable 

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
 .then(() => console.log('MongoDB Connected to Hema_DB!'))
 .catch(err => {
    console.log('DB Connect Error :');
    console.error(err);
 });

//User router

app.use('/api/posts', postRoutes)



app.listen(PORT, () => console.log (`Server Runing on Port ${PORT}`))



//http://localhost:8000/api/posts