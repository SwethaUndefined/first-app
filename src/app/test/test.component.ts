import { Component } from '@angular/core';

@Component({
  // selector: '.app-test',
  selector: '[app-test]',

  // templateUrl: './test.component.html',
  template: `<div>Hello World {{2+2}}</div>
   <div >{{name.length}}</div>
   <!-- {{name.toUppercase()}} -->
   <div>{{siteurl}}</div>
   <input type="text" value="swetha" />
   <input type="text" value="swetha" [disabled]="true"/>
   <br> <br> <br> <h1>Class Binding Topic Starting from here:</h1>

   <h2 [class]="successclass" >Code Evolution</h2>
   <!-- class="text-success" -->
   <h2 [class.text-danger]= "isError"> Code EVolution </h2>
   <h4 [ngClass]="message">Udemy</h4>
  `,

  // styleUrls: ['./test.component.css']
  styles: [
    // `div{
    //   color : red;
    // }`
  `  .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-special{
      font-family : italic;
    }`
  ]

})
export class TestComponent {
public name : any = "Swetha";
public siteurl : any = window.location.href;
public successclass = "text-success";
public isError = true;
public isSpecial = true;
public message = {
  "text-success" : this.isError,
  "text-danger" : !this.isError,
  "text-special" : this.isSpecial
}

}
