const mongoose = require('mongoose');

// DB_CONNECTION  = mongodb+srv://testUser:testUser@test20-zpm8h.mongodb.net/test?retryWrites=true&w=majority

// mongoose.connect('mongodb://localhost:27017/CrudDB',(err)=> {
mongoose.connect('mongodb+srv://testUser:testUser@test20-zpm8h.mongodb.net/survey3DB?retryWrites=true&w=majority',(err)=> {

    if(!err)
        console.log('MongoDB connection cucceded.')
        
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2))

});

require('./models/user.model')


module.exports = mongoose





