import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';
import { SurveyService } from 'src/app/shared/survey.service';
import { survey3DB } from 'src/app/shared/survey.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  logIn = true;

  userDetails;


  // allSurvey$:survey3DB;
  allSurvey

  constructor(private authService: AuthService,
    private surveyService: SurveyService,
              private router: Router) { }

  ngOnInit() {
    console.log("5")

    // this.authService.ggg(true)



    this.authService.getUserProfile().subscribe(
      res=>{
          this.userDetails = res['user'];

          console.log(res)
      },
      err =>{
    // this.router.navigate(['/singIn'])


      }
    )
    // console.log(this.userDetails)




    // const allSurveyObservable = this.surveyService.getSurveyList();
    // allSurveyObservable.subscribe((liste:survey3DB)=>{
    //   this.allSurvey = liste
    //   // console.log('+')
    // })


    setTimeout(()=>{
      this.surveyService.getSurveyList().subscribe((res) =>{

        // this.allSurvey$ = res as survey3DB ;
        this.allSurvey = res ;

        console.log(res)
      })
    },1000)


  }

  // onLogout(){
  //   this.authService.deleteToken()
  //   this.router.navigate(['/singIn'])
  // }

  selectMySurvey(id){
    console.log(id)
    this.router.navigate([`/${id}`]);

  }







  surveyCreat(){

  }

}
