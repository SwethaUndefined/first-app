import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent {

  public displayName = false;
  public color = 'red';
  public colors = ["red","blue","green","yellow","orange"]
  @Input()public parentData: any;
  @Input('lastName') public last : any;
  @Output() public childEvent = new EventEmitter();

  fireEvent(){
    this.childEvent.emit("Hello from Code Evolution")
  }
}
