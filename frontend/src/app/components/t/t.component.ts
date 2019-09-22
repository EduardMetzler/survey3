import { Component, OnInit, Inject } from '@angular/core';
import { SurveyService } from 'src/app/shared/survey.service';
import { Terr } from './te';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, FormArray } from '@angular/forms';




@Component({
  selector: 'app-t',
  templateUrl: './t.component.html',
  styleUrls: ['./t.component.css']
})
export class TComponent implements OnInit {



  t
// students:Terr[]=[]

  // t=[5,5,5,5]s
  constructor(private surveyService:SurveyService,
    private router:Router) { }

  ngOnInit() {

      setInterval(()=>{
        this.surveyService.getT().subscribe((res) =>{

          this.t = res;
          console.log(res)
      })
    },1000)

    //   const studentsObservable = this.surveyService.getT();
    // studentsObservable.subscribe((studentsData:Terr[]) => {
    //     this.t = studentsData ;
    //     console.log(this.t)
    // });


  }

}
