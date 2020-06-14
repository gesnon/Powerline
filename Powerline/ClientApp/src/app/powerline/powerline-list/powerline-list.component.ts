import { Component, OnInit } from '@angular/core';
import { Powerline } from './../powerline';
import { ContractPIR } from '../../conrtactPIR/contractPIR';

@Component({
  selector: 'powerline-list',
  templateUrl: './powerline-list.component.html'
})
export class PowerlineListComponent implements OnInit {
  powerlines: Powerline[] = [];

  ngOnInit() {
    let powerline1 = new Powerline(1, "Name1", new ContractPIR(1,"ContractPIR_1",new Date(2020,7,7)));
    let powerline2 = new Powerline(2, "Name2", new ContractPIR(2, "ContractPIR_2", new Date(2020,8, 8)));
    this.powerlines.push(powerline1);
    this.powerlines.push(powerline2);
  }
}
