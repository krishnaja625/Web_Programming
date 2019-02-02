import { Component, OnInit, Input } from '@angular/core';
import { CatData } from './catlo';
import { Data } from './catalog';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
data= Data;
each:CatData;
x;
disp;
@Input() text1: string;
	@Input() text2: string;
	@Input() text3: string;
  editt= false;
ind=0;
  constructor() { }

  ngOnInit() {
  }
  display(){
  this.disp = true;
  }
delete(ind) {
    this.data.splice(ind,1);
  }
  edit(ina){

  this.editt= true;
  this.each=this.data[ina];

this.each.title= this.text1;
this.each.description= this.text2;
this.each.quantity= this.text3;
this.data[ina]=this.each;
console.log(this.data[ina].title);


  }
  onOK(){
  this.editt=false;
  (<HTMLFormElement>document.getElementById("Form")).reset();
    (<HTMLDivElement>document.getElementById("refresh")).innerHTML = '<button type = "button"  (click)="display()"> Display Catalog </button>';
  }
}
