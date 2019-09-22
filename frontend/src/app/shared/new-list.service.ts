import { Injectable } from '@angular/core';
import { NewListFormComponent } from '../components/user/list-creat/new-list-form/new-list-form.component';
import { ListForm } from './usel.model';

@Injectable({
  providedIn: 'root'
})
export class NewListService {

  form;

  s= 222

  constructor() { }

  getNewForm(form){
      this.form = form
      console.log(this.form)
  }

  getFormSend(){
    console.log(this.form)

    return this.form
  }
}
