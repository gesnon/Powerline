import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class PowerlineService {
  constructor(private http: HttpClient) { }

  private API = "/API/Powerline";

  public GetPowerlines() {
    return this.http.get(this.API);
  };
}
