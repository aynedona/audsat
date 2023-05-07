import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './components/logs/logs.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LogsComponent
  ],
  imports: [
    CommonModule,
    LogsRoutingModule,
    SharedModule
  ]
})
export class LogsModule { }
