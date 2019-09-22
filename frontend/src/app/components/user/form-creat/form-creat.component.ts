import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-creat',
  templateUrl: './form-creat.component.html',
  styleUrls: ['./form-creat.component.css']
})
export class FormCreatComponent implements OnInit {
  // values="";
  newForm: FormGroup;
  a=4



  form = {
    allHorizontal:[""],
    allVertikal:[""]




  }

  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      allHorizontal: this.fb.array([
        this.fb.group({
          horizontal: [""],
        })

      ]),
      allVertikal: this.fb.array([
        this.fb.group({
          vertikal: [""]
        })

      ]),
    })
   }

  ngOnInit() {
  }

  click(i,j){
    console.log(i+1,j+1)
  }

  ngSubmit(form){
      console.log(form)
  }

  keyOnHorizontal(event,i){
    this.form.allHorizontal[i] = event.target.value

    console.log(this.form.allHorizontal)
  }

  keyOnVertikal(event,i){
    this.form.allVertikal[i] = event.target.value

    console.log(this.form.allVertikal)
  }

  addNew(item) {
    if(item == 'vertikal'){

      if(this.form.allVertikal.length<7){
        let control = <FormArray>this.newForm.controls.allVertikal;

    control.push(
      this.fb.group({
        vertikal: [''],

      }))
        this.form.allVertikal.push("")

          }



    } else{

        if(this.form.allHorizontal.length<100){
          let control = <FormArray>this.newForm.controls.allHorizontal;

          control.push(
            this.fb.group({
              horizontal: [''],

            }))
      this.form.allHorizontal.push("")

        }



    }

  }

}
