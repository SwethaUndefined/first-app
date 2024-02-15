import { Component } from '@angular/core';

@Component({
  selector: '.app-binding',
  template: `
  <br> <br> <br> <h1>Style Binding Topic Starting from here:</h1>
            <h4 [style.color]="hasError ? 'orange' : 'green'">Style Binding</h4>
            <h4 [style.color]="highlightColor">Style Binding 2</h4>
            <h4 [ngStyle]="titleStyle">Style Binding 3</h4>
            <br> <br> <br> <h1>Event Binding Topic Starting from here:</h1>
            <button (click)="functionClick($event)">Click</button>
            <button (click)="greet = 'Welcome to CodeEvolution'">Click</button>

           <h3> {{greet}}</h3>
  `,
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
 public hasError = true;
 public highlightColor = "purple";
 public titleStyle = {
  color : "green",
  fontStyle : "italic"
 }
 public greet = "";

 functionClick(e: any){
   this.greet = e.type   //this will tell what type of event we did, means when we console e, it will
   //print the information about the button, that we can use it as needed.
   console.log(e)
 }
}
