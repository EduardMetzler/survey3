import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
// import {SurveyService} from '../../shared/survey.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {


  singUpForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    firstNameFormControl: new FormControl('', Validators.required),
    nameFormControl: new FormControl('', Validators.required),

    passwordFormControl: new FormControl('', Validators.required),
});

// serverErrorMessage:string;

  constructor(public authService: AuthService,
              private snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit() {

  }

  ngSubmit() {
    console.log(this.singUpForm.value);
    // var f =this.singUpForm.value
    this.authService.getNewUser(this.singUpForm.value).subscribe(
      res =>{
            console.log("log ist erfolg")
            // this.singUpSnackBar("Registrirung ist Erfolgreich", "Ok")
            // this.surveyService.enterUserSingUpReset()
            // this.router.navigate([`/myProfil`]);




    },
    err=>{
      if (err.status === 422){
        // this.serverErrorMessage = err.error.json('<br>');
        console.log("err 422")

      }
      else  {
        // this.serverErrorMessage = "something went wron. Please conact admin"
      }
    })


  }

  // singUpSnackBar(message,action){
  //     let snackBarRef = this.snackBar.open(message,action)

  //     snackBarRef.afterDismissed().subscribe(()=>{
  //       this.toMyProfil()
  //     })
  // }

  // toMyProfil(){
  //   this.router.navigate([`/werew`]);

  // }



}







// onSubmit(form: NgForm){
//   if (form.value._id == "" ) {
//     this.employeeService.postEmployee(form.value).subscribe((res) => {
//       this.resetForm();
//       this.refreshEmployeeList();
//       M.toast({html: 'saved', classes: 'rounded'});

//     });
//   }
//   else{
//     this.employeeService.putEmployee(form.value).subscribe((res) => {
//       this.resetForm();
//       this.refreshEmployeeList();

//       M.toast({html: 'update', classes: 'rounded'});

//     });
//   }

// }
