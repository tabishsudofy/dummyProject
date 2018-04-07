import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent{
  constructor() { }
 @Input() result : number = 100;
 @Input() anyNumber : number = 500;
 @Output() clicked = new EventEmitter<string>();
 onClicked(){
   this.clicked.emit('This is a string');
 }


}
 