const MedicalAppModels = require('../../mongo/models/medical-appointment-models');

const createAppointment = async (req, res) => {
    console.log('req.body', req.body);
    
    const {name, lastname, identification, birthdate, city, neighborhood, phone, appointment} = req.body;

    try {
        const users = await MedicalAppModels.create({
            name,
            lastname,
            identification,
            birthdate,
            city,
            neighborhood,
            phone,
            appointment
        });
        res.send({status:'OK', data: users});
    } catch (error) {
        console.log('createUser error:', error);
        res.status(500).send({status:'ERROR', message:'appointment-create'});   
    }
};
const updateAppointment = async (req, res) => {
   try {
        const {name, lastname, identification, birthdate, city, neighborhood, phone, appointment, userId } = req.body;
        const users = await MedicalAppModels.findByIdAndUpdate(userId, { appointment }).select('appointment');
        res.send({ status:'OK', data: users });
   } catch (error) {
      console.log(error);
      if(error.code && error.code === 11000){
        res.status(400).send({status: 'DUPLICATED_VALUES', message: error.keyValue});
        return;
    }
      res.status(500).send({status:'ERROR', message:'appointment-update'});
   }
};
const deleteAppointment = async (req, res) => {
    try {
        const { userId } = req.body;
        console.log('userID', userId);
        if (!userId) {
            throw new Error('missing param userId');
        }
        await MedicalAppModels.findByIdAndDelete(userId);
        res.send({status:'OK', message:'appointment-delete'});
    } catch (error) {
        console.log('delete appointment error', error);
        res.status(500).send({status:'ERROR', data: error.message});
    }
};
const getAppointment = async (req, res) => {
    try {
        const users = await MedicalAppModels.find().select('name lastname identification appointment');
        res.send({status:'OK', data: users });
    } catch (error) {
        console.log('get appointment error', error);
        res.status(500).send({status:'ERROR', data: error.message});
    }
};

module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment,
    getAppointment
}