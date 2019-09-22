import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { NewListService } from 'src/app/shared/new-list.service';


@Component({
  selector: 'app-new-list-form',
  templateUrl: './new-list-form.component.html',
  styleUrls: ['./new-list-form.component.css']
})
export class NewListFormComponent implements OnInit {

  // @Output() allDatenEvent = new EventEmitter();

  newForm: FormGroup;
  allDaten ={
    // inputType:[],
    // allDrop:[],
    // dropTrue:["dedwe"],
    // form:{}


  };



schow = "newListForm";


  // inputType = [[-1]]
  // allDrop = [[""]]

  // dropTrue =['']



  form = {
    allHorizontal:[{
      horizontal: ""
    }],
    allVertikal:[{
      vertikal:""
    }],




  }

  // allHorizontalArray = this.form.allHorizontal
  // allVertikalArray = this.form.allVertikal

  constructor(private fb: FormBuilder,
    private newListService:NewListService) {
    this.newForm = this.fb.group({
      allHorizontal: this.fb.array([
        this.fb.group({
          horizontal: [''],
        })

      ]),
      allVertikal: this.fb.array([
        this.fb.group({
          vertikal: ['']
        })

      ]),
    });
   }

  ngOnInit() {

    setInterval(()=>{

    },1000)
  //   setInterval(()=>{
      // console.log(this.allHorizontalArray,this.form)
    // },1000)

    // setInterval(()=>{
    //   this.toDropSetting()
    // },1000)
  }

  toDropSetting(){
    // this.allDaten[0].push(this.inputType,this.allDrop,this.dropTrue,this.form)
    // this.allDaten.push('234')


    // this.allDaten.inputType= this.inputType
    // this.allDaten.allDrop= this.allDrop
    // this.allDaten.dropTrue= this.dropTrue
    // this.allDaten.form= this.form


    // this.allDatenEvent.emit(this.allDaten);
  }



  // clickIK(i,k){

  //   if (this.inputType[i][k] == k) {
  //     this.inputType[i][k] = -1;
  //     for(let oneInputType of this.inputType[i]){
  //         if (oneInputType = -1){
  //           this.dropTrue[i] = "false";


  //         }
  //         else{
  //           this.dropTrue[i] = "true";
  //           break;

  //         }
  //     }




  //   }
  //   else {
  //   this.inputType[i][k] = k
  //   this.dropTrue[i] = "true"

  //   }

  //   for(let oneInputType of this.inputType){
  //     for( let input of oneInputType){
  //       // if(input is Number )
  //     }
  //   }

  //   console.log(i,k, this.inputType)
  // }

  // ngSubmit(form){
  //     console.log(this.form)
  // }

  // keyOnHorizontal(event,i){
  //   this.form.allHorizontal[i].horizontal = event.target.value;

  //   console.log(this.form.allHorizontal)
  // }

  // keyOnVertikal(event,i){
  //   this.form.allVertikal[i].vertikal = event.target.value;

  //   console.log(this.form.allVertikal)
  // }

  addNew(item) {
    if (item == 'vertikal'){

      if(this.form.allVertikal.length < 7) {
        let control = <FormArray>this.newForm.controls.allVertikal;

    control.push (
      this.fb.group ({
        vertikal: [""]

      }))
        this.form.allVertikal.push({vertikal:""})
      // this.inputTypeColPlus()


          }



    } else{

        if(this.form.allHorizontal.length<100){
          let control = <FormArray>this.newForm.controls.allHorizontal;

          control.push(
            this.fb.group({
              horizontal: [''],

            }))
      this.form.allHorizontal.push({horizontal:""})
      // this.inputTypeRowPlus()


        }



    }

    this.newSend()

  }


  newSend(){
    this.newListService.getNewForm(this.form)
    // this.newListService.getFormSend()
  }
  // inputTypeColPlus(){
  //     for (let item of this.inputType){
  //       item.push(-1)
  //     }
  //     for (let item of this.allDrop){
  //       item.push("")
  //     }
  //     console.log(this.inputType,this.allDrop)
  //   }

  //   inputTypeRowPlus(){
  //     let item =[-1]
  //     let item2 =[""]

  //     for (let i = 1; i< this.form.allVertikal.length; i++){
  //       item.push(-1)
  //       item2.push("")

  //     }
  //    this.inputType.push(item);
  //    this.allDrop.push(item2)


  //   }

}
