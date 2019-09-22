import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { SurveyService } from 'src/app/shared/survey.service';
import { survey3DB } from 'src/app/shared/survey.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-survey-creat',
  templateUrl: './survey-creat.component.html',
  styleUrls: ['./survey-creat.component.css']
})
export class SurveyCreatComponent implements OnInit {
  userDetails
  autorId



  form={
    theme:""
  };
  data = {
    theme:"",
    allQuestionAndAnswer: [
      {
        oneQuestion: "",
        allAnswerOfQuestion: [
          {
            oneAnswer: "",
            oneAnswerVote:0
          }
        ]
      }
    ],
    // autorId:""
  }

  newSurveyForm: FormGroup;

  constructor(private fb: FormBuilder,
    private surveyService: SurveyService,
    private authService:AuthService,
    private router: Router) {
    this.newSurveyForm = this.fb.group({
      theme:this.fb.control(['']),
      allQuestionAndAnswer: this.fb.array([]),
      // autorId:this.fb.control([''])
    })

    this.setQuestion();
    // this.setQ()
  }
  ngOnInit() {
    this.authService.getUserProfile().subscribe(
      res=>{
          this.userDetails = res['user'];
          console.log( this.userDetails._id )
          this.autorId = this.userDetails._id

          console.log(this.userDetails._id, this.autorId)
      },
      err =>{
    // this.router.navigate(['/singIn'])


      }
    )





     }
     ngSubmit(){
      // this.newSurveyForm.value.autorId=""
      // console.log(this.newSurveyForm.value.autorId)
      console.log(this.autorId)

      this.newSurveyForm.value.autorId=this.autorId
      this.newSurveyForm.value.vote=0

      console.log(this.newSurveyForm.value.autorId)





    //    this.authService.getNewUser(this.singUpForm.value).subscribe(
    //     res =>{
    //           console.log("log ist erfolg")
    //           // this.singUpSnackBar("Registrirung ist Erfolgreich", "Ok")
    //           // this.surveyService.enterUserSingUpReset()
    //           // this.router.navigate([`/myProfil`]);




    //   },
    //   err=>{
    //     if (err.status === 422){
    //       // this.serverErrorMessage = err.error.json('<br>');
    //       console.log("err 422")

    //     }
    //     else  {
    //       // this.serverErrorMessage = "something went wron. Please conact admin"
    //     }
    //   })


    // }




      //  console.log(this.form)




       this.surveyService.getNewSurvey(this.newSurveyForm.value).subscribe(res=>{
         console.log('eeeeeeeeeeeeeeeeeee')
       },err=>{
         console.log("dddddddddddddddddd",this.newSurveyForm.value)
       })


    this.router.navigate([`/my/userProfile`]);

     }

  addNewQuestion() {
    let control = <FormArray>this.newSurveyForm.controls.allQuestionAndAnswer;
    control.push(
      this.fb.group({
        oneQuestion: [''],
        allAnswerOfQuestion: this.fb.array([
          this.fb.group({
            oneAnswer: [''],
            oneAnswerVote:[0]
          })
        ])
      })
    )
  }

  deleteQuestion(index) {
    let control = <FormArray>this.newSurveyForm.controls.allQuestionAndAnswer;
    control.removeAt(index)
  }

  addNewAnswer(control) {
    control.push(
      this.fb.group({
        oneAnswer: [''],
        oneAnswerVote:[0]
      }))
  }

  // addNewAnswer(control) {
  //   control.push(
  //     this.fb.control(
  //       oneAnswer: ['']
  //     ))
  // }

  deleteAnswer(control, index) {
    control.removeAt(index)
  }

  setQuestion() {
    let control = <FormArray>this.newSurveyForm.controls.allQuestionAndAnswer;
    this.data.allQuestionAndAnswer.forEach(x => {
      control.push(this.fb.group({
        oneQuestion: x.oneQuestion,
        allAnswerOfQuestion: this.setQ(x) }))
    })
  }

  setQ(x) {
    let arr = new FormArray([])
    x.allAnswerOfQuestion.forEach(y => {
      arr.push(this.fb.group({
        oneAnswer: y.oneAnswer,
        oneAnswerVote:y.oneAnswerVote
      }))
    })
    return arr;
  }

  // setProjects(x) {
  //   let arr = new FormArray([])
  //   x.allAnswerOfQuestion.forEach(y => {
  //     arr.push(this.fb.control(
  //       oneAnswer: y.oneAnswer
  //     ))
  //   })
  //   return arr;
  // }
}







// import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators, FormGroup, NgForm, FormArray } from '@angular/forms';


// @Component({
//   selector: 'app-survey-creat',
//   templateUrl: './survey-creat.component.html',
//   styleUrls: ['./survey-creat.component.css']
// })
// export class SurveyCreatComponent implements OnInit {
//   // allQuestionsOfOneSurvey:{oneQuestionsOfOneSurvey:[oneQuestion= "",allAnswerOfQuestion=[]]}

//   // allQuestionsOfOneSurveyArray = [  {
//   //   oneQuestion:"",


//   //   allAnswerOfQuestion:[]
//   // }];
//   private createallQuestionsOfOneSurvey():FormGroup{
//     return new FormGroup({
//       oneQuestionFormControl: new FormControl('f', [Validators.required]),


//           allAnswerOfQuestion :new FormArray([
//             new FormGroup({
//               answerFormControl: new FormControl('a', [Validators.required]),

//             })
//           ])
//     })
//   }

//   private createoneAnswer():FormGroup{
//     return new FormGroup({
//       answerFormControl: new FormControl('a', [Validators.required]),

//     })
//   }




//   surveyCreateForm: FormGroup;
//   form: FormGroup;
//   // form2: FormGroup;

//   allQuestionsOfOneSurveyArray: FormArray;
//   allAnswerOfQuestionArray: FormArray;
//   // form:FormGroup;
//   constructor() {
//     // this.form = new FormGroup({
//     //   oneQuestionFormControl: new FormControl('', [Validators.required]),


//     //   allAnswerOfQuestion :new FormArray([
//     //     new FormGroup({
//     //       answerFormControl: new FormControl('dddddddd', [Validators.required]),

//     //     })
//     //   ])

//     // })




//     this.surveyCreateForm = new FormGroup({
//       themeFormControl: new FormControl('t', [Validators.required]),
//       allQuestionsOfOneSurvey:new FormArray([
//         this.form = new FormGroup({
//           oneQuestionFormControl: new FormControl('f', [Validators.required]),


//           allAnswerOfQuestion :new FormArray([

//             // new FormGroup({
//             //   answerFormControl: new FormControl('a', [Validators.required]),

//             // })
//             this.createoneAnswer()
//           ])

//         })


//       ])

//       // allQuestionsOfOneSurvey:new FormArray([new FormGroup({
//       //   oneQuestion:new FormControl('',Validators.required),
//       //   allAnswerOfQuestion:new FormArray([
//       //     new FormControl('',Validators.required)
//       //   ])

//       // })])
//   });
//   this.allQuestionsOfOneSurveyArray = <FormArray>this.surveyCreateForm.controls['allQuestionsOfOneSurvey'],
//   this.allAnswerOfQuestionArray = <FormArray>this.form.controls['allAnswerOfQuestion']
//   }

//   ngOnInit() {
// }

//   ngSubmit(){
//     console.log(this.surveyCreateForm.value)
//   }


//   addQuestion(){
//     // this.createallQuestionsOfOneSurvey()
//       this.allQuestionsOfOneSurveyArray.push(this.createallQuestionsOfOneSurvey());
//       return false
//   }

//   addAnswer(i,ii){
//     console.log(this.allQuestionsOfOneSurveyArray)
//     this.allAnswerOfQuestionArray.push(this.createoneAnswer())
//     // console.log(t,i)
//     // tttt.allAnswerOfQuestionArray.push(this.createoneAnswer());
//     // let tt =t.allAnswerOfQuestionArray[ii]

//     // tt.push(this.createoneAnswer());

//     return false

//   }

// }








// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// @Component({
//   // selector: 'app-survey-creat',
//   templateUrl: './survey-creat.component.html',
//     styleUrls: ['./survey-creat.component.css']
// })
// export class AppComponent {

//   data = {
//     companies: [
//       {
//         company: "example comany",
//         projects: [
//           {
//             projectName: "example project",
//           }
//         ]
//       }
//     ]
//   }

//   myForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.myForm = this.fb.group({
//       companies: this.fb.array([])
//     })

//     this.setCompanies();
//   }

//   addNewCompany() {
//     let control = <FormArray>this.myForm.controls.companies;
//     control.push(
//       this.fb.group({
//         company: [''],
//         projects: this.fb.array([])
//       })
//     )
//   }

//   deleteCompany(index) {
//     let control = <FormArray>this.myForm.controls.companies;
//     control.removeAt(index)
//   }

//   addNewProject(control) {
//     control.push(
//       this.fb.group({
//         projectName: ['']
//       }))
//   }

//   deleteProject(control, index) {
//     control.removeAt(index)
//   }

//   setCompanies() {
//     let control = <FormArray>this.myForm.controls.companies;
//     this.data.companies.forEach(x => {
//       control.push(this.fb.group({
//         company: x.company,
//         projects: this.setProjects(x) }))
//     })
//   }

//   setProjects(x) {
//     let arr = new FormArray([])
//     x.projects.forEach(y => {
//       arr.push(this.fb.group({
//         projectName: y.projectName
//       }))
//     })
//     return arr;
//   }
// }
