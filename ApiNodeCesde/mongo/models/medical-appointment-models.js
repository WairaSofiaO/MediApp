const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalAppSchema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        lastname: { type: String, required: true, unique: true},
        identification: {type: Number, required: true, unique: true },
        birthdate:{ type: Date},
        city:{ type: String },        
        neighborhood:{ type: String },
        phone:{ type: Number },
        appointment:{
            type:{ date: Date, hours:Date, doctor: String, subject: String }
        }
   }
);

const model = mongoose.model('medicalApp', medicalAppSchema);
module.exports = model;