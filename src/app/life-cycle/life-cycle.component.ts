import {
  Component, OnInit,
  OnChanges,AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit, DoCheck, 
  OnDestroy, Input,
  ViewChild,
  ContentChild,

} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements 
OnInit , OnChanges , AfterViewChecked
,AfterViewInit,DoCheck,OnDestroy,
AfterContentChecked , AfterContentInit{

  constructor() { }
  a = true;
 @Input() bindable = "it is a bindable variable";
 @ViewChild('para')
 para;
 @ContentChild('paraValue')
 paraValue : HTMLElement;
  check(){
    this.a = !this.a;
  }
 
  ngOnChanges() {
    this.onClick("OnChanges");
  }
  ngAfterContentChecked() {
    this.onClick("AfterContentChecked");
  }
  ngAfterContentInit() {
    this.onClick("AfterContentInit");
    console.log("==================")
    console.log(this.paraValue);
    console.log("==================")
  }
  ngAfterViewChecked() {
    this.onClick("ngAfterViewChecked");
    console.log(this.para);
     }
   ngAfterViewInit() {
    this.onClick("ngAfterViewInit");
   }
   ngOnDestroy() {
    this.onClick("ngOnDestroy");
   }
   ngDoCheck() {
    this.onClick("ngDoCheck");
   }

   ngOnInit() {
    this.onClick("ngOnInit");
    console.log(this.bindable);
   }
  
  private onClick(a : string){
    console.log(a);
  }

}
