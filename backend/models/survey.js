const mongoose = require('mongoose');

var survey = mongoose.model('survey',{
    theme:{type:String},
    autorId:{type:String},

    allQuestionsOfOneSurvey:{type:Array},
   

    oneQuestionsOfOneSurvey:{type:Object},
    oneQuestion:{type:String},
    // allAnswerOfQuestion:{type:Array},
    vote:{type:Number},
    oneAnswerVote:{type:String}
    // hh:{type:Object},
    // oneAnswer:{type:String}



    // theme:{type:String},
    // allQuestionsOfOneSurvey:[{oneQuestionsOfOneSurvey:oneQuestion,allAnswerOfQuestion:[]}],
    // oneQuestionsOfOneSurvey:{type:Object}
    // oneQuestion:{type:String},
    // allAnswerOfQuestion:{type:Array}




    // allQuestionAndAnswer:[oneQuestion="",{allAnswerOfQuestion:[oneAnswer=""]}]

}) 

module.exports = {survey}