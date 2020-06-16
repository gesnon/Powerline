import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { SummatorComponent } from './summator/summator.component';
import { PowerlineListComponent } from './powerline/powerline-list/powerline-list.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ContractPIRListComponent } from './conrtactPIR/contractPIR-list/contractPIR-list.component';
import { ContractPIRFormComponent } from './conrtactPIR/contractPIR-form/contractPIR-form.component';
import { PowerlineService } from './powerline/powerline.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    SummatorComponent,
    PowerlineListComponent,
    FetchDataComponent,
    ContractPIRFormComponent,
    ContractPIRListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'summator', component: SummatorComponent },
      { path: 'powerlinesList', component: PowerlineListComponent },
      { path: 'contractPIRList', component: ContractPIRListComponent },
      { path: 'contractPIRForm/:id', component: ContractPIRFormComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [PowerlineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
