import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operators/of';
// import { of } from 'rxjs';
// import { of } from 'rxjs/observable/of'
// import {Observable} from 'rxjs/Rx';

import { Terr } from '../components/t/te';


import {survey3DB} from './survey.model';
// import { newUserForm } from './newUser.model';





import { Observable, observable } from 'rxjs/index';



@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  allSurvey: survey3DB[];

  // logIn=false;

  // liste:survey3DB[]=[{theme:"ddddddddd"},{theme:"ffffffffffffffffffffff"}]

  // enterUserSingUp = {
  //   emailFormControl:"",
  //   firstNameFormControl: "",
  //   nameFormControl: "",

  //   passwordFormControl: ""
  // }

// readonly baseURL = 'http://localhost:3000';

// liste:survey3DB[] = this.http.get(this.baseURL)
// o
// students:Observable<Terr[]>
// students: Terr[] = [{
//  theme:3
// },
// {
//   theme:2

// },
// {
//   theme:1

// }];

// this.http.get(this.baseURL + "/t")

  // dateColection:AngularFirestoreCollection<Home>
  // date:Observable<Home[]>
  // dateDoc:AngularFirestoreDocument<Home>


  constructor(private http: HttpClient,
    ) { }
baseURL: string = 'http://localhost:3000';


  getNewSurvey(form) {
    console.log(form);
    return this.http.post(this.baseURL + "/my/userProfile/surveyCreat ", form);

  }

  // public getSurveyList():any{
  //   const listeObservable = new Observable(observable =>{
  //     setTimeout(()=>{
  //       observable.next(this.etSurveyList())
  //     }, 1000)
  //   })
  //   return listeObservable
  // }

  getSurveyList(): Observable<survey3DB> {
    return   this.http.get<survey3DB>(this.baseURL +  "/start" );
  }




  // getSurveyList(){
  //   return   this.http.get(this.baseURL + "/start ")
  // }


  // getSurveyLis(){
  //   let g='34'
  //   return g
  // }




  getT() {
    return   this.http.get(this.baseURL + "/t");


    // const studentsObservable = new Observable(observer => {
    //   setInterval(() => {
    //     this.students[0].theme=this.students[0].theme+1
    // }, 1000);
    //        setInterval(() => {
    //            observer.next(this.students);
    //        }, 1000);
    // });

    // return studentsObservable;
  }

  // getSurveyList(): Observable<survey3DB[]>{
  //   console.log('1111')
  //   this.liste = this.http.get(this.baseURL)
  //   console.log(this.liste)
  //   return this.liste


  // }

  // getNewUser(form:newUserForm){
  //   console.log(form)
  //   return this.http.post(this.baseURL + '/singUp' , form)

  // }



  oneSurveyLoad(surveyId) {
    console.log(surveyId, this.baseURL + `/${surveyId}`);
    return this.http.get(this.baseURL + `/${surveyId}`);
    // return this.http.get(this.baseURL + `/wewefef`)


  }

  getMyResult(oneSurvey, surveyId) {
    // console.log(surveyId,clicks)
    // let s="wdewdde"
    // console.log(surveyId,clicks,s)
    console.log(oneSurvey);

   return  this.http.put(this.baseURL + `/${surveyId}` ,oneSurvey )
  }



  // enterUserSingUpReset(){
  //   this.enterUserSingUp = {
  //     emailFormControl:"",
  //     firstNameFormControl: "",
  //     nameFormControl: "",

  //     passwordFormControl: ""
  //   }
  //   console.log(this.enterUserSingUp)
  // }
}




// readonly baseURL = 'http://localhost:3000/employees';

// constructor(private http:HttpClient) { }
// postEmployee(emp:Employee){
//   return this.http.post(this.baseURL, emp);
// }

// getEmployeeList(){
//   console.log('1111')

//   return this.http.get(this.baseURL)
// }
