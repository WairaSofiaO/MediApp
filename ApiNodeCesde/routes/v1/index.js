const medicalAppRoutes = require('./medical-appointment-routes');



module.exports = app => {
    app.use('/api/v1/appointment', medicalAppRoutes);
};