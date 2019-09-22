import { Component, OnInit } from '@angular/core';
import {SurveyService} from '../../shared/survey.service';
import { survey3DB } from 'src/app/shared/survey.model';
// import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-start-layout',
  templateUrl: './start-layout.component.html',
  styleUrls: ['./start-layout.component.css'],
  providers: [SurveyService]
})
export class StartLayoutComponent implements OnInit {
  liste:survey3DB[]=[]

  allSurvey;
  // allSurvey$: survey3DB[] = [];

  // t
  // students$

  // students: survey3DB[] = [];


  constructor(public surveyService: SurveyService,
    private router:Router) { }

  ngOnInit() {


    // const listeObservable = this.surveyService.getSurveyList();
    // console.log(listeObservable)
    // listeObservable.subscribe((listeData:survey3DB[]) => {
    //     this.allSurvey = listeData ;

    // });









    // setInterval(()=>{
      // this.surveyService.getSurveyList().subscribe((res) =>{

      //   this.allSurvey = res  ;
      //   console.log(res)
      // })
    // },10000)


    // setTimeout(()=>{
      this.surveyService.getSurveyList().subscribe((res) =>{

        this.allSurvey = res ;
        console.log(res)
      })
    // },100)






  }

  selectSurvey(oneSurvey){
    console.log(oneSurvey._id)
    // let id =i._id
    this.router.navigate([`/${oneSurvey._id}`]);
  }

  // refreshEmployeeList(){
  //   console.log('1111')
  //   this.surveyService.getEmployeeList().subscribe((res) =>{
  //     this.surveyService.allSurvey = res as Survey[];
  //     console.log(res)
  //   })

// }
}
