const mongoose =require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')



var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:"firstName cann/'t be empty"
    },
    name:{
        type:String,
        required:"Name cann/'t be empty"
    },
    email:{
        type:String,
        required:"email cann/'t be empty",
        unique:true
    },
    password:{
        type:String,
        required:"password cann/'t be empty",
        minlength:[4,"min 4 character"]
    },
    satlSecret:String

})

userSchema.pre('save',function(next){
   bcrypt.genSalt(10,(err,salt) => {
    bcrypt.hash(this.password, salt,(err,hash) => {
        this.password = hash;
        this.satlSecret = salt;
        next()
    })
   })
})


// Passport
userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password)
}

// userSchema.methods.generateJwt = function(){
//     return jwt.sign({_id:this._id},
//         process.env.JWT_SECRET),
//     {
//         expiresIn: process.env.JWT_EXP
//     }
// }

userSchema.methods.generateJwt = function () {
    return jwt.sign({
        _id: this._id
    }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXP
        });
}

mongoose.model('User',userSchema)

