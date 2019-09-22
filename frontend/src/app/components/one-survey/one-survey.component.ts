import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
import {SurveyService} from '../../shared/survey.service';




@Component({
  selector: 'app-one-survey',
  templateUrl: './one-survey.component.html',
  styleUrls: ['./one-survey.component.css']
})
export class OneSurveyComponent implements OnInit {
  // clicks = [];
  clicks = [];



  oneSurvey$: {};
  oneSurveyId;
  selectSurvey;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private surveyService: SurveyService ) { }

  ngOnInit() {
    this.selectSurvey = this.activatedRoute.params.subscribe(
      params => {
        this.oneSurveyId = params['oneSurvey._id'];
        console.log(this.oneSurveyId);
        this.oneSurvey$ = this.surveyService.oneSurveyLoad(this.oneSurveyId); }
        // console.log(this.oneSurvey$)

    ),
    console.log(this.oneSurvey$);






  }

  submit(oneSurvey) {
    console.log(oneSurvey);
    oneSurvey.vote = oneSurvey.vote + 1;
    console.log(oneSurvey);


    this.surveyService.getMyResult(oneSurvey, this.oneSurveyId);
  }

  oneAnswerSelect(oneSurvey, i, j) {
    console.log(oneSurvey, i, j);
    if (this.clicks.length == 0) {
      for (let i2 = 0; i2 < oneSurvey.allQuestionsOfOneSurvey.length; i2++) {
        this.clicks[i2] = 2222222222222;
        if (i == i2) {
        this.clicks[i] = j;

        } else {
        // this.clicks[i].push('rfe')

        }

        // for(let j2 = 0; j2 < oneSurvey.allQuestionsOfOneSurvey[i2].allAnswerOfQuestion.length; j2++){
        //   this.clicks[i2].push(false)

        // }
        console.log(this.clicks);


      }



    } else {
      this.clicks[i] = j;
    }



  }

}


// this.subscription=this.activatedRoute.params.subscribe(
//   params =>{
//     this.recipeId= +params['id'];
//     this.selectedRecipe=this.recipeService.getRecipe(this.recipeId)}
// )
// }




// funcAnswerVariantSelect(q, oneSurvey,i){

//   this.allVote=oneSurvey.allVote
//   this.all=oneSurvey.all



//    if(this.theQuestions.theAnswers.length==0){
//     for(let i = 0; i < oneSurvey.all.length; i++){
//       this.theQuestions.theAnswers.push("")
//     }
//    }
//     this.theQuestions.theAnswers[i]=q

//         for(let oneTheAnswers of this.theQuestions.theAnswers){
//           if(oneTheAnswers == ""){
//               this.submitBtnDisabled=true;
//               break

//           }
//           else{
//             this.submitBtnDisabled=false;

//           }
//         }

//       console.log(this.oneSurvey$,oneSurvey.all,this.id)
//       console.log(this.theQuestions)

//   }
