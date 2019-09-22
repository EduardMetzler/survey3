const express = require('express');

const router = express.Router();

const jwtHelper = require('../config/jwtHelper')


const t = require('../controllers/test')

router.get('/t',t.testget)



const survey = require('../controllers/survey.controller')

router.post('/my/userProfile/surveyCreat', survey.surveyCreaty)

router.get('/start',survey.allSurvey)

// router.post('/surveyCreat',survey.surveyCreaty)

router.get('/:surveyId',survey.oneSurvey)

router.put('/:surveyId',survey.surveyUpdate)

// router.put('/:surveyId' ,function (req,res){
//     if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record with givin id : ${req.params.surveyId}`)

//     var emp = {
//         theme: req.body.theme,
//         // allQuestionsOfOneSurvey: req.body.allQuestionAndAnswer,
//         // oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
//         // oneQuestion:req.body.oneQuestion,
//         // autorId:req.body.autorId,
//         // vote:req.body.vote,
//         // oneAnswerVote:req.body.oneAnswerVote
//     };

//     Survey.findByIdAndUpdate(req.params.surveyId, {$set:emp}, {new : true}, (err,doc)=>{
//         if(!err){res.send(doc)}
//         else { console.log('Error in Employee Update : ' + JSON.stringify(err, undefined, 2))}
//     })
// })







const auth = require('../controllers/user.controller')

router.post('/singUp',auth.singUp)

router.post('/singIn',auth.singIn)

router.get('/my/userProfile', jwtHelper.verifyJwtToken, auth.userProfile);
// router.get('/:surveyId',survey.oneSurvey)






module.exports = router


// router.put('/:id' , (req,res) =>{
//     if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record with givin id : ${req.params.id}`)

//     var emp = {
//         name: req.body.name,
//         age: req.body.age
//     };

//     Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new : true}, (err,doc)=>{
//         if(!err){res.send(doc)}
//         else { console.log('Error in Employee Update : ' + JSON.stringify(err, undefined, 2))}
//     })
// })











/////////////////////////////

// var ObjectId = require('mongoose').Types.ObjectId

// var {survey} = require('../models/survey');

// var plusSurve= require('../controllers/surveyController')
// router.post('/1',plusSurve.p)


// // const jwt = require('jsonwebtoken')
// // const jwt = require('jsonwebtoken');


// const passport = require('passport')
// require('../config/passportConfig')

// const mongoose = require('mongoose')
// const User = mongoose.model('User')




// router.post('/singUp', (req,res,next) =>{
//     // console.log(req)
//     var user = new User()
//     user.firstName = req.body.firstNameFormControl;
//     user.name = req.body.nameFormControl;
//     user.email = req.body.emailFormControl;
//     user.password = req.body.passwordFormControl;
//     user.save((err,doc)=>{
//         if(!err)
//         res.send(doc);
//         else
//         if (err.code ===11000)
//         res.status(422).send(['Dupilicate email adresse found.'])
//         else
//         return next(err)
//     })

// })






// const ctrUser = require('./ctr')
// router.post('/singIn',ctrUser.authenticate)

// router.post('/singIn' ,(req,res,next)=>{
//     passport.authenticate('local', (err, user, info)=>{
//         if (err) return res.status(400).JSON(err)
//         else if(user) 
//         return res.status(200).JSON({"token":user.generateJwt()})
//         else 
//         return res.status(404).JSON(info)
//     })(req, res)
   
// })

// userSchema.methods.generateJwt = function () {
//     return jwt.sign({
//         _id: this._id
//     }, process.env.JWT_SECRET,
//         {
//             expiresIn: process.env.JWT_EXP
//         });
// }

// module.exports.authenticate = (req,res,err)=>{
//     passport.authenticate('local', (err, user, info)=>{
//         if (err) return res.status(400).JSON(err)
//         else if(user) return res.status(200).JSON({"token":user.generateJwt()})
//         else return res.status(404).JSON(info)
//     })(req, res)
   
// }




////////////////////////////////

