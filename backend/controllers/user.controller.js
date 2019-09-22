// const express = require('express');
// const {mongoose} = require('../db.js')

// const router = express.Router();

// var ObjectId = require('mongoose').Types.ObjectId

// var {survey} = require('../models/survey');
const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')


module.exports.singUp =(req,res,next) =>{
    console.log(req)
    var user = new User()
    user.firstName = req.body.firstNameFormControl;
    user.name = req.body.nameFormControl;
    user.email = req.body.emailFormControl;
    user.password = req.body.passwordFormControl;
    user.save((err,doc)=>{
        if(!err)
        res.send(doc);
        else
        if (err.code ===11000)
        res.status(422).send(['Dupilicate email adresse found.'])
        else
        return next(err)
    })
    
}

module.exports.singIn = (req, res, next) => {
    console.log('oooooooooooooooooo')
    // var user = new User()
    // user.firstName = req.body.firstNameFormControl;
    // user.name = req.body.nameFormControl;
    // user.email = req.body.emailFormControl;
    // user.password = req.body.passwordFormControl;
    // console.log('oooooooooooooooooo',req)

    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // console.log(user,'ikiukiuk')
        // error from passport middleware
        if (err) return res.status(404).json(err);
        // registered user
        if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(401).json(info);
    })(req, res);
}


const _ = require('lodash');
 
module.exports.userProfile = (req, res, next) =>{
    // console.log('123cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc')
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
     
            

                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                // console.log(user)
                return res.status(200).json({ status: true, user : _.pick(user,['password','email','name','firstName','_id']) });
        }
    );
}


// module.exports.singIn = (req,res,next)=>{
//     console.log("wdwedwed")
//     passport.authenticate('local', (err, user, info)=>{
//         console.log("wwwwwwwwwwwwwwwwwwwww")
//         if (err) return res.status(400).JSON(err)
        
    
//         else if(user) 
        
//         return res.status(200).JSON({"token":user.generateJwt()})
//         else 
//         return res.status(404).JSON(info)
//     })(req, res)
   
// }

