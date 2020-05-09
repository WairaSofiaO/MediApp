const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

console.log('MONGO_DB:',process.env.MONGO_DB);

const routesV1 = require('./routes/v1/index');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
    console.log('Connected to mongodb');
    app.listen(PORT, () => {
        console.log(`running on port ${PORT}`);
    });
}).catch(error =>{
    console.log('mongodb error', error);
});

