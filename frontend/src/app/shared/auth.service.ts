import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { newUserForm } from './newUser.model';
import { userForm } from './usel.model';
import { Observable, Observer} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // logIn;
  // token;




readonly baseURL = 'http://localhost:3000';

noAuthHeader = {headers: new HttpHeaders({ 'NoAuth' : 'true'})}


  constructor(private http: HttpClient) { }

  public getObservableOfToken(): any{
    // const tokenObservable = new Observable(observer =>{
    //   setInterval(()=>{
    //     observer.next(this.getToken())

    //   },100)
    // });

    const tokenObservable = Observable.create((observer: Observer<string>) =>{
      setInterval(()=>{
        observer.next(this.getToken())


      },100)
    });

    return tokenObservable;
  }



  // ggg(log){
  //   this.logIn=log
  //   console.log(this.logIn)
  //   // return true
  // }

  // hhh(){
  //   // console.log(this.logIn)
  //   return this.logIn
  // }

  // ttt(){
  //   this.logIn=false
  //   return false
  // }

  getNewUser(form: newUserForm){
    console.log(form);
    return this.http.post(this.baseURL + '/singUp' , form, this.noAuthHeader)

  }

  getSingIn(form: userForm){
    console.log(form)
    return this.http.post(this.baseURL + '/singIn' , form, this.noAuthHeader)


  }


  getUserProfile(){
      // console.log("dddddddddddddddddddddddddddddddddddddddddddddd")
    return this.http.get(this.baseURL + '/my/userProfile')
  }

  setToken(token:string){
    // this.token = true
    console.log("2")

    console.log(token)
    localStorage.setItem('token', token)
  }

  getToken(){
    return localStorage.getItem('token')
  }

  deleteToken(){
    // this.token = undefined

    localStorage.removeItem('token')
  }

  getUserPayload(){





    var token = this.getToken();
    // var token = localStorage.getItem('token') ;
    console.log(token)

    if (token){
      var userPayload = atob(token.split('.')[1]);
      // var userPayload = atob(token);

      return JSON.parse(userPayload)
    }
    else
      return null;
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now()/1000;
    else
      return false;
  }



}


