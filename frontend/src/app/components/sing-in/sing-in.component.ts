import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';


@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  serverErrorMessage:string

  form={
    email:'',
    password:''

  }

  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);






  singInForm: FormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]
    ),
    passwordFormControl: new FormControl('', Validators.required),
});

  constructor(private authService:AuthService,
              private router:Router) { }



  ngOnInit() {
  }

  ngSubmit() {
    console.log(this.form)

    console.log(this.singInForm.value);
    this.form.email = this.singInForm.value.emailFormControl
    this.form.password = this.singInForm.value.passwordFormControl
    console.log(this.form)




    this.authService.getSingIn(this.form).subscribe(
      res =>{
        console.log("1")
            this.authService.setToken(res['token']);
            this.router.navigateByUrl('my/userProfile')
        console.log("3")

            // this.singUpSnackBar("Registrirung ist Erfolgreich", "Ok")
            // this.surveyService.enterUserSingUpReset()
            // this.router.navigate([`/myProfil`]);




    },
    err=>{
      if (err.status === 422){
        // this.serverErrorMessage = err.error.json('<br>');
        this.serverErrorMessage = err.error.message
        console.log("333")

      }
      else  {
        // this.serverErrorMessage = "something went wron. Please conact admin"
      }
    })
  }



}
