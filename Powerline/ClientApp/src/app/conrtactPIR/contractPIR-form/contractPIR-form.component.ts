import { Component, OnInit } from '@angular/core';
import { ContractPIR } from './../contractPIR';

@Component({
  selector: 'contractPIR-form',
  templateUrl: './contractPIR-form.component.html'
})
export class ContractPIRFormComponent implements OnInit {
  contractPIR: ContractPIR = new ContractPIR(1,"ContractPIRName", new Date(2020,6,7));

  ngOnInit() {
   
  }
}
