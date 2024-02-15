import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  
  public name = "Swetha"
  public message = "Welcome to codevolution"
  public obj = {
    firstName : "Swetha",
    lastName : "Ragunathan"
  }
  public date = new Date();
}
