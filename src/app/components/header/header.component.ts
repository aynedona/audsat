import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public clickHandler() {
    this.sidenav.close();
  }
}
