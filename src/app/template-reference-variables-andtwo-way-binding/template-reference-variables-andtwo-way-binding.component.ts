import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables-andtwo-way-binding',
  templateUrl: './template-reference-variables-andtwo-way-binding.component.html',
  styleUrls: ['./template-reference-variables-andtwo-way-binding.component.css']
})
export class TemplateREferenceVariablesANDTwoWayBindingComponent {
  public username : any ;

  templateRefernce (value: any){
    console.log("Hello")
   console.log(value)
   console.log(this.username)
  }

  templateColor(redColor: any,blueColor: any, text1: any,text2: any){

    if(redColor == text1){
      console.log(text1)
    }
    else{
      console.log(text2)
    }
  }
}
