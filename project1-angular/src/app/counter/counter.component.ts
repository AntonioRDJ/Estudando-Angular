import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{

value: number = 0;

  @Output() changeValue = new EventEmitter();
  

  incrementOne(){
    this.value++;
    this.updateValue();
  }

  incrementTen(){
    this.value+=10;
    this.updateValue();
  }

  decreasesOne(){
    this.value--;
    this.updateValue();
  }

  decreasesTen(){
    this.value-=10;
    this.updateValue();
  }

  updateValue(){
    this.changeValue.emit({newValue: this.value});
  }
}

