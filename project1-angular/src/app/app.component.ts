import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  clickStatus: string = 'alert-primary';
  clicks: number = 0;

  sumClicks(evento){
    this.clicks++;

    if(evento.newValue < 10 && evento.newValue > -10){
      this.clickStatus = 'alert-primary';
    }else if(evento.newValue < 30 && evento.newValue > -30){
      this.clickStatus = 'alert-success';
    }else if(evento.newValue < 50 && evento.newValue > -50){
      this.clickStatus = 'alert-warning';
    }else{
      this.clickStatus = 'alert-danger';
    }
  }
}
