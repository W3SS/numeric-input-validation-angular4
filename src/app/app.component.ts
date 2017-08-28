import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numericValueDecimal: number;
  numericValue: number;
  public onInput(value) {
    this.numericValue = value;
  }
  public onInputDecimal(value) {
    this.numericValueDecimal = value;
  }
}
