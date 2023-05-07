import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  public active!: string;
  public menuOpened: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.active = window.location.href.includes('home') ? 'home' :
      window.location.href.includes('admin') ? 'admin' :
      window.location.href.includes('logs') ? 'logs' :
      'home';
  }

  public navRouter(route: string) {
    this.active = route;
    this.router.navigate(['../', route], { relativeTo: this.activatedRoute });
  }
}
