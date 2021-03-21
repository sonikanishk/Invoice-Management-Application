const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const path =  require('path');


const PORT = process.env.PORT || 8080;

require('dotenv').config({
    path:'./config/config.env'
})

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

const productRouter = require('./routes/product.route');


if (process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}

app.use('/api',productRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}

app.use((req,res,next)=>{
    res.status(404).json({
        success: false,
        message: "Page not Found"
    })
});


app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
});
