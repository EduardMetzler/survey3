
const mongoose = require('mongoose')
var {test} = require('../models/test');



module.exports.testget =(req,res) =>{
    console.log("ffffffffffffffffffffff")
    test.find((err,docs) =>{
        // console.log(`zujzu`)
        // this.connect.log(survey3DB)
        
        if(!err) { res.send(docs)}
        else { console.log('Error in Retriving Employees : ' + JSON.stringify(err, undefined, 2))}
    })
}




// const passport = require('passport');



// const mongoose = require('mongoose')
// const User = mongoose.model('User')






// module.exports.authenticate = (req,res,err)=>{
//     passport.authenticate('local', (err, user, info)=>{
//         if (err) return res.status(400).JSON(err)
//         else if(user) return res.status(200).JSON({"token":user.generateJwt()})
//         else return res.status(404).JSON(info)
//     })(req, res)
   
// }



