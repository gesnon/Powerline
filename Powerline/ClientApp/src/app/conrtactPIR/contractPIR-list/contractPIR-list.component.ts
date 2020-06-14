import { Component, OnInit } from '@angular/core';
import { ContractPIR } from './../contractPIR';

@Component({
  selector: 'contractPIR-list',
  templateUrl: './contractPIR-list.component.html'
})
export class ContractPIRListComponent implements OnInit {
  contractPIRs: ContractPIR[] = [];

  ngOnInit() {
    let a1 = new ContractPIR(1, "Name1",new Date (2020,6,7));
    let a2 = new ContractPIR(2, "Name2", new Date(2020, 7, 8));
    this.contractPIRs.push(a1);
    this.contractPIRs.push(a2);
  }
}
