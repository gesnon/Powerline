import { Component, OnInit } from '@angular/core';
import { Powerline } from './../powerline';
import { ContractPIR } from '../../conrtactPIR/contractPIR';
import { PowerlineService } from '../powerline.service';

@Component({
  selector: 'powerline-list',
  templateUrl: './powerline-list.component.html'
})
export class PowerlineListComponent implements OnInit {
  powerlines: Powerline[] = [];
  constructor(private PowerlineService: PowerlineService) { }

  public GetPowerlines() {
    this.PowerlineService.GetPowerlines().subscribe((b: Powerline[]) => this.powerlines = b);
  }
  ngOnInit() {
    this.GetPowerlines();
  }
}
