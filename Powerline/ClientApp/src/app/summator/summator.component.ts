import { Component } from '@angular/core';

@Component({
  selector: 'app-summator-component',
  templateUrl: './summator.component.html'
})
export class SummatorComponent {
  public a: number;
  public b: number;
  public result: number;



  public summary() {
    this.result=this.a+this.b;
  }
}
