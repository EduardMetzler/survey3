import { Component, OnInit,ViewChild, ViewChildren,AfterViewInit,QueryList } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import {NewListFormComponent} from './new-list-form/new-list-form.component'
import { NewListService } from 'src/app/shared/new-list.service';
import { ListForm} from 'src/app/shared/usel.model';
// import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-list-creat',
  templateUrl: './list-creat.component.html',
  styleUrls: ['./list-creat.component.css']
})
export class ListCreatComponent implements OnInit,AfterViewInit {
  // @ViewChildren(NewListFormComponent) allDatenRef: QueryList <NewListFormComponent>
  // @ViewChild(NewListFormComponent) allDatenRef:NewListFormComponent

// values="";
newForm: FormGroup;
newDropDown: FormGroup;
allDaten= {}
// s:userForm;

r = 0;
gg = 0

// allSelect = []

aktuelDropDown = []
// panelOpenState = false;


schow =false;

inputType = [[-1]]
// allDrop = [[[""]]]
allDrops = [
  {dropsOfOneHorisontal: [{
    // oneDropActiv : 'false',
    OneDrop: ['']
    }],
  },

]

dropTrue =['']
formTest ;


form = {

  allHorizontal:[{
    horizontal: ""
  }],
  allVertikal:[{
    vertikal:""
  }],
}

// inputType = [] ;
// allDrop = [[]]
// dropTrue =[]
// form = {}

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

////////////////////////////////////////////////////

  this.newDropDown = this.fb.group({
    allQustionsOfOneDropDown: this.fb.array([
      // this.fb.group({
      //   oneQuestion:['']
      // })
    ])
  })
 }

ngOnInit() {
//  console.log( this.allDrops[0].dropsOfOneHorisontal[0].OneDrop[0])
  // // this.form.allHorizontal.push({horizontal:""})
  // setInterval(()=>{
  //   this.formTest = this.newListService.getFormSend()
  //   console.log(this.formTest,this.form)
  //   // this.newListService.getFormSend()
  //   // this.newListService.getFormSend().subscribe((form) =>{
  //   //   console.log()
  //   //   this.s= form as userForm
  //   // })
  // },10000)
}

// this.surveyService.getSurveyList().subscribe((res) =>{

//   this.allSurvey = res ;
//   console.log(res)
// })

ngAfterViewInit(){
  // this.allDatenRef.toArray().forEach(element =>{
  //   this.form = element.form


  // })

  // setInterval(()=>{
  //   console.log(this.allDatenRef.allHorizontalArray)
  //   this.form.allHorizontal = this.allDatenRef.allHorizontalArray

  //   console.log(this.form)
  // },5000)
}

toDrop(){
this.schow = !this.schow

}


clickIK(i,k){
  console.log(this.inputType[i])

  // let ii = i.toString()
  // let jj = j.toString()
  // let ij = ii + jj
  if (this.inputType[i][k] == k) {
    this.inputType[i][k] = -1;
    // this.allDrops[i].dropsOfOneHorisontal[k].OneDrop[0] = 'false'
    console.log(this.allDrops[i])
    for(let oneInputType of this.inputType[i]){
        if(oneInputType == -1){
          this.r = this.r + 1;
        }
    }
  }
  else {
  this.inputType[i][k] = k
  this.dropTrue[i] = "true"
  // this.allDrops[i].dropsOfOneHorisontal[k].OneDrop[0] = 'true'
    console.log(this.allDrops[i])
  }


  if (this.r == this.inputType[i].length){
  this.dropTrue[i] = ""

  }
  this.r = 0
  // console.log(i,k, this.inputType,this.dropTrue)
  // console.log(this.allDrop)
}

ngSubmit(form){
    console.log(this.form)
}

keyOnHorizontal(event,i){
  this.form.allHorizontal[i].horizontal = event.target.value;

  console.log(this.form.allHorizontal)
}

keyOnVertikal(event,i){
  this.form.allVertikal[i].vertikal = event.target.value;

  console.log(this.form.allVertikal)
}

addNew(item) {
  if (item == 'vertikal'){

    if(this.form.allVertikal.length < 7) {
      let control = <FormArray>this.newForm.controls.allVertikal;

  control.push (
    this.fb.group ({
      vertikal: [""]

    }))
      this.form.allVertikal.push({vertikal:""})
    this.inputTypeColPlus()


        }



  } else{

      if(this.form.allHorizontal.length<100){
        let control = <FormArray>this.newForm.controls.allHorizontal;

        control.push(
          this.fb.group({
            horizontal: [''],

          }))
    this.form.allHorizontal.push({horizontal:""})
    this.inputTypeRowPlus()


      }



  }

}
inputTypeColPlus(){
    for (let item of this.inputType){
      item.push(-1)
    }
    for (let item of this.allDrops){
      item.dropsOfOneHorisontal.push({OneDrop:['']})


    }

    console.log(this.allDrops)
  }

  // allDrops = [
  //   {dropsOfOneHorisontal: [{
  //     OneDrop: []
  //     }],
  //   },
  // ]

  inputTypeRowPlus(){
    let item =[-1]
    // let item2 =[[""]]

    for (let i = 1; i< this.form.allVertikal.length; i++){
      item.push(-1)
      // item2.push("")

    }
   this.inputType.push(item);
  //  this.allDrop.push(item2)
  let item2 = {dropsOfOneHorisontal: [{OneDrop: ['']}]}
  for ( let i = 1; i < this.form.allVertikal.length; i++){
    item2.dropsOfOneHorisontal.push({OneDrop: ['']})
  }
  this.allDrops.push(item2)

    console.log(this.allDrops)
  }

  /////////////////////////////////

  // keyDropDown(event,i,j,k){
  // this.allDrops[i].dropsOfOneHorisontal[j].OneDrop[k] = event.target.value;


  //   // console.log(i,j,this.allDrops[i].dropsOfOneHorisontal[j].OneDrop[0])
  //   console.log(this.allDrops)

  // }

  // // allDrops = [
  // //   {dropsOfOneHorisontal: [{
  // //     OneDrop: ['']
  // //     }],
  // //   },

  // // ]

  // matTabGroup(i){
  //   // this.addNewOneQuestion()
  //   console.log(this.allDrops[i].dropsOfOneHorisontal[0].OneDrop[0])

  //   this.newDropDown = this.fb.group({
  //     allQustionsOfOneDropDown: this.fb.array([
  //       this.fb.group({
  //         oneQuestion:[this.allDrops[i].dropsOfOneHorisontal[0].OneDrop[0]]
  //       }),

  //     ])
  //   })

  //   for (let i2 = 1; i2 < this.allDrops[i].dropsOfOneHorisontal[0].OneDrop.length;i2++){
  //     this.addNewOneQuestionByLoad(i,i2)
  //   }







  // }


  // addNewOneQuestionByLoad(i,i2){
  //   let control = <FormArray>this.newDropDown.controls.allQustionsOfOneDropDown;
  //   control.push(
  //     this.fb.group({
  //       oneQuestion: [this.allDrops[i].dropsOfOneHorisontal[0].OneDrop[i2]],

  //     }))



  // }

  // addNewOneQuestion(i,j){
  //   let control = <FormArray>this.newDropDown.controls.allQustionsOfOneDropDown;
  //   control.push(
  //     this.fb.group({
  //       oneQuestion: [''],

  //     }))

  //     this.allDrops[i].dropsOfOneHorisontal[j].OneDrop.push('')



  // }

  // ngSubmitDrop(form){
  //   console.log(this.newDropDown.value)
  // }

  //////



  // keyDropDown(event,i,j,k){
  //   this.allDrops[i].dropsOfOneHorisontal[j].OneDrop[k] = event.target.value;


  //     // console.log(i,j,this.allDrops[i].dropsOfOneHorisontal[j].OneDrop[0])
  //     console.log(this.allDrops)

  //   }

    // allDrops = [
    //   {dropsOfOneHorisontal: [{
    //     OneDrop: ['']
    //     }],
    //   },

    // ]

    // matTabGroup(i){
    //   // this.addNewOneQuestion()
    //   // console.log(this.allDrops[i].dropsOfOneHorisontal[0].OneDrop[0])

    //   for (let l = 0; l < this.allDrops[i].dropsOfOneHorisontal.length ;l++){
    //     for ( let j of this.allDrops[i].dropsOfOneHorisontal[l].OneDrop[0]){
    //       // console.log(this.allDrops[i].dropsOfOneHorisontal[l].OneDrop[0])
    //       if (j == 'true'){
    //         // this.aktuelDropDown.push(i,j)
    //         // console.log(this.aktuelDropDown)
    //         console.log(i,l)
    //         console.log(this.allDrops)
    //         this.newDropDown = this.fb.group({
    //           allQustionsOfOneDropDown: this.fb.array([
    //             this.fb.group({
    //               oneQuestion:[this.allDrops[i].dropsOfOneHorisontal[l].OneDrop[1]]
    //             }),

    //           ])
    //         })
    //         for (let i2 = 2; i2 < this.allDrops[i].dropsOfOneHorisontal[l].OneDrop.length;i2++){
    //           this.addNewOneQuestionByLoad(i,l,i2)

    //         }
    //         this.gg ==1
    //         break




    //       }
    //       else {
    //         console.log("false")
    //       }


    //     }
    //     if (this.gg == 1){
    //       break
    //     }

    //   }




    //   this.gg == 0



    matTabGroup(i){
      if (this.aktuelDropDown[0] == undefined){
        this.aktuelDropDown[0] = i;
        console.log(this.inputType[i])
        let item = this.inputType[i]
        for (let i2 = 0; i2 < item.length; i2++){
         if (item[i2] != -1 && this.aktuelDropDown[1] == undefined) {
          this.aktuelDropDown[1] = i2;
          console.log(this.aktuelDropDown)
         }
       }
        this.addNewOneQuestionByLoad();
      } else {




        console.log(this.newDropDown.value)

        this.allDrops[this.aktuelDropDown[0]].dropsOfOneHorisontal[this.aktuelDropDown[1]].OneDrop = []




        for (let r = 0; r <  this.newDropDown.value.allQustionsOfOneDropDown.length; r++ ){
          this.allDrops[this.aktuelDropDown[0]].dropsOfOneHorisontal[this.aktuelDropDown[1]].OneDrop.push(this.newDropDown.value.allQustionsOfOneDropDown[r].oneQuestion)
          }

        }



        this.aktuelDropDown[0] = i;
        console.log(this.inputType[i])
        let item = this.inputType[i]
        for (let i2 = 0; i2 < item.length; i2++){
         if (item[i2] != -1 && this.aktuelDropDown[1] == undefined) {
          this.aktuelDropDown[1] = i2;
          console.log(this.aktuelDropDown)
         }
       }

      //  this.newDropDown = this.fb.group({
      //   allQustionsOfOneDropDown: this.fb.array([
      //     // this.fb.group({
      //     //   oneQuestion:['']
      //     // })
      //   ])
      // })






        this.addNewOneQuestionByLoad();













    }





    // }

      // allDrops = [
  //   {dropsOfOneHorisontal: [{
  //     OneDrop: []
  //     }],
  //   },
  // ]


    addNewOneQuestionByLoad(){
      this.newDropDown = this.fb.group({
        allQustionsOfOneDropDown: this.fb.array([
          // this.fb.group({
          //   oneQuestion:['']
          // })
        ])
      })




      let allSelect = this.allDrops[this.aktuelDropDown[0]].dropsOfOneHorisontal[this.aktuelDropDown[1]].OneDrop
      console.log( allSelect)
      // let allSelect = ['1','444'];

      let control = <FormArray>this.newDropDown.controls.allQustionsOfOneDropDown;
      for (let i = 0; i < allSelect.length; i++){
        control.push(
          this.fb.group({
            // oneQuestion: [this.allDrops[i].dropsOfOneHorisontal[l].OneDrop[i2]],
            oneQuestion: [allSelect[i]],


          }))
          // this.allSelect=[]

      }







    }

    addNewOneQuestion(i,j){
      console.log(i,j)
      let control = <FormArray>this.newDropDown.controls.allQustionsOfOneDropDown;
      control.push(
        this.fb.group({
          oneQuestion: ['444444444'],

        }))
        console.log(this.allDrops)

        // this.allDrops[i].dropsOfOneHorisontal[j].OneDrop.push('')



    }

    ngSubmitDrop(form){
      console.log(this.newDropDown.value)
    }
}


