import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public name = "Swetha";
  public lastName = "Ragunathan";
  public message = "";


  inputfield(name: any){
    console.log(name)

  }
}
