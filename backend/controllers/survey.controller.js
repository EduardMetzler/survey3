const mongoose = require('mongoose')
// const User = mongoose.model('User')
var {survey} = require('../models/survey');

var ObjectId = require('mongoose').Types.ObjectId


// const express = require('express');

// const router = express.Router();

// var ObjectId = require('mongoose').Types.ObjectId




// public getObservableOfToken(): any{
//     // const tokenObservable = new Observable(observer =>{
//     //   setInterval(()=>{
//     //     observer.next(this.getToken())

//     //   },100)
//     // });

//     const tokenObservable = Observable.create((observer: Observer<string>) =>{
//       setInterval(()=>{
//         observer.next(this.getToken())


//       },100)
//     });

//     return tokenObservable;
//   }


module.exports.allSurvey =(req,res) =>{
    survey.find((err,docs) =>{

        if(!err) { res.send(docs)}
        else { console.log('Error in Retriving Employees : ' + JSON.stringify(err, undefined, 2)
        )}
    })
}

module.exports.oneSurvey = (req,res) => {
    // console.log(`bbbbbbbbbbbbbbbbbbbbbb`)

    if (!ObjectId.isValid(req.params.surveyId))
    return res.status(400).send(`No record with givin id : ${req.params.surveyId}`)


    survey.findById(req.params.surveyId, (err,doc)=>{
        if (!err) {res.send(doc)}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err, undefined, 2))}
    });
}


module.exports.surveyCreaty =(req,res) =>{
    console.log("ääääääääääääääääääääääääääääääääääääää")
    console.log(req)


    // var Survey = new survey()
    // Survey.theme= req.body.theme;
    // Survey.oneQuestion = req.oneQuestion.body.oneQuestion;
    // theme= req.body.theme,
        // allQuestionsOfOneSurvey: req.body.allQuestionsOfOneSurvey,
        // oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
        // oneQuestion:req.body.oneQuestion,
        // allAnswerOfQuestion:req.body.allAnswerOfQuestion
   



    var Survey = new survey({
        // theme: req.body.theme,
        // allQuestionsOfOneSurvey: req.body.allQuestionsOfOneSurvey,
        // oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
        // oneQuestion:req.body.oneQuestion,



        // allAnswerOfQuestion:req.body.allAnswerOfQuestion



        theme: req.body.theme,
        allQuestionsOfOneSurvey: req.body.allQuestionAndAnswer,
        oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
        oneQuestion:req.body.oneQuestion,
        autorId:req.body.autorId,
        vote:req.body.vote,
        oneAnswerVote:req.body.oneAnswerVote
        // allAnswerOfQuestion:req.body.hh,
        // oneAnswer:req.body.oneAnswer
    })
    Survey.save((err,doc) =>{
        // console.log(doc)
        if(!err){res.send(doc)}
        else { console.log('Error in Employee Save : ' + JSON.stringify(err, undefined, 2))}
    })
}

module.exports.surveyUpdate = (req,res) =>{

    console.log('req')

    if (!ObjectId.isValid(req.params.surveyId))
        return res.status(400).send(`No record with givin id : ${req.params.surveyId}`)
    
        var emp = {
            // theme: 'req.body.theme',
            // allQuestionsOfOneSurvey: req.body.allQuestionAndAnswer,
            // oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
            // oneQuestion:req.body.oneQuestion,
            // autorId:req.body.autorId,
            // vote:req.body.vote,
            // oneAnswerVote:req.body.oneAnswerVote
        };
    
        survey.findByIdAndUpdate(req.params.surveyId, {$set:emp}, {new : true}, (err,doc)=>{
            if(!err){res.send(doc),console.log(emp)}
            else { console.log('Error in Employee Update : ' + JSON.stringify(err, undefined, 2))}
        }
    )

}




    // console.log(req)
//   survey.findByIdAndUpdate(req.params.surveyId,
    
//     {
//         $set:{theme:req.body.theme}
//     },
//     {new:true},
//     function(err,update){
//         if(err){
//             res.send('error update');

//         }else{
//     console.log(req.params.surveyId)

//             res.json(update)
//         }
//     }
//     )
// }



// module.exports.singUp =(req,res,next) =>{
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
    
// }





















// const express = require('express');

// const router = express.Router();

// var ObjectId = require('mongoose').Types.ObjectId

// var {survey} = require('../models/survey');

// // const jwt = require('jsonwebtoken')
// // const jwt = require('jsonwebtoken');


// // localhost:3000/employees

// router.get('/',(req,res) =>{
//     survey.find((err,docs) =>{
//         console.log(`zujzu`)
//         // this.connect.log(survey3DB)
        
//         if(!err) { res.send(docs)}
//         else { console.log('Error in Retriving Employees : ' + JSON.stringify(err, undefined, 2))}
//     })
// })

// const passport = require('passport')
// // require('../config/passportConfig')



// router.get('/:id',(req,res) => {
//     console.log(`111111111`)

//     if (!ObjectId.isValid(req.params.id))
//     return res.status(400).send(`No record with givin id : ${req.params.id}`)


//     survey.findById(req.params.id, (err,doc)=>{
//         if (!err) {res.send(doc)}
//         else {console.log('Error in Retriving Employee : ' + JSON.stringify(err, undefined, 2))}
//     });
// })

// router.post('/',(req,res) =>{
//     var newSurvey = new survey({
//         theme: req.body.theme,
//         allQuestionsOfOneSurvey: req.body.allQuestionsOfOneSurvey,
//         oneQuestionsOfOneSurvey:req.body.oneQuestionsOfOneSurvey,
//         oneQuestion:req.body.oneQuestion,
//         allAnswerOfQuestion:req.body.allAnswerOfQuestion
//     })
//     newSurvey.save((err,doc) =>{
//         if(!err){res.send(doc)}
//         else { console.log('Error in Employee Save : ' + JSON.stringify(err, undefined, 2))}
//     })
// })



// /////////////////////////////









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






// // const ctrUser = require('./ctr')
// // router.post('/singIn',ctrUser.authenticate)

// // router.post('/singIn' ,(req,res,next)=>{
// //     passport.authenticate('local', (err, user, info)=>{
// //         if (err) return res.status(400).JSON(err)
// //         else if(user) 
// //         return res.status(200).JSON({"token":user.generateJwt()})
// //         else 
// //         return res.status(404).JSON(info)
// //     })(req, res)
   
// // })

// // userSchema.methods.generateJwt = function () {
// //     return jwt.sign({
// //         _id: this._id
// //     }, process.env.JWT_SECRET,
// //         {
// //             expiresIn: process.env.JWT_EXP
// //         });
// // }

// // module.exports.authenticate = (req,res,err)=>{
// //     passport.authenticate('local', (err, user, info)=>{
// //         if (err) return res.status(400).JSON(err)
// //         else if(user) return res.status(200).JSON({"token":user.generateJwt()})
// //         else return res.status(404).JSON(info)
// //     })(req, res)
   
// // }




// ////////////////////////////////

// module.exports.p=(req,res,next)=>{
//     console.log("wefwefew")
// }


// module.exports = router