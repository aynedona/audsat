import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.less']
})
export class LogsComponent implements OnInit {
  public displayedColumns: string[] = ['date', 'msg'];
  public logsData!: [];

  constructor() {}

  ngOnInit(): void {
    this.logsData = JSON.parse(localStorage.getItem('logs') || '[]');
  }

}
