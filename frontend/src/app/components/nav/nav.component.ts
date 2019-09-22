import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/shared/survey.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  opened = false;

  token: string= "";

  userDetails={
    name:""
  };

  // logIn=false
  // pause=false

  // token

  constructor(public authService:AuthService,
    private surveyService:SurveyService,
    private router: Router) { }

  ngOnInit() {

    const tokenObservable = this.authService.getObservableOfToken();
    tokenObservable.subscribe((tokenData:string)=>{
      this.token = tokenData
      // console.log('+')
    })
    // setInterval(()=>{
    // this.token=this.authService.getToken()

    // },100)




    this.authService.getUserProfile().subscribe(
      res=>{
          this.userDetails = res['user'] ;
      },
      err =>{
    // this.router.navigate(['/singIn'])


      }
    )
    // console.log(this.userDetails)





    setInterval(()=>{

      // this.authService.getToken().subscribe(
      //   res=>{
      //     // if (this.pause==false){
      //       this.token = res
      //       // console.log(this.userDetails)

      //     // }

      //   },
      //   err =>{
      //     // this.router.navigate(['/singIn'])


      //   }
      // )


      // this.logIn=this.authService.hhh()



      this.authService.getUserProfile().subscribe(
        res=>{
          // if (this.pause==false){
            this.userDetails = res['user']
            // console.log(this.userDetails)

          // }

        },
        err =>{
          // this.router.navigate(['/singIn'])


        }
      )
    },100)
  }


    onLogout(){
      // this.logIn=this.authService.ttt()
    this.authService.deleteToken()
    this.router.navigate(['/singIn'])
    // this.logIn = false
    // this.pause= true
    // setTimeout(()=>{
    // this.pause= false

    // },10000)
  }

}
