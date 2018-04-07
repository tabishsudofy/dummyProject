import { Component, ViewChild, ElementRef } from '@angular/core';
import { Element } from '@angular/compiler';
// import {PropertyBindingComponent} from '../property-binding/property-binding.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  stringInterpolation = "This is string interpolation!!";
  test = "This is test string!!";
  boundValue = "new Bindable Valaue";
  @ViewChild('newValue')
  newValue : ElementRef;
  constructor() { }
  
  check() {
    return true;
  }
  result = 200;
  anyNumber = 1000;
  onClicked(value: string) {
    console.log(value);
  }
  // public ampere = 1;
  // public amount = 2000;
  // myresult = this.ampere * this.amount;
  person = {
    name: "Alex",
    ampere: 0,
    totalAmount: 0
  };
  onClick() {
    console.log(this.person);
    console.log(this.newValue.nativeElement.innerHTML);
  }
  keyDown(e) {
    this.person.totalAmount = 2000 * this.person.ampere;
  }

}
