import { ContractPIR } from "../conrtactPIR/contractPIR";

export class Powerline {
  constructor(
    public id: number,
    public name: string,
    public contractPIR: ContractPIR
  ) { }

}
