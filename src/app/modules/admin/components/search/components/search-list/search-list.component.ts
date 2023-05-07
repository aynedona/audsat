import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/modules/admin/interfaces/users';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.less']
})
export class SearchListComponent implements OnInit {
  public displayedColumns: string[] = ['name', 'username', 'email', 'phone'];

  @Input() filteredData!: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {}

  public openPost(user: Users) {
    const extrasData = { state: { user }, relativeTo: this.activatedRoute };
    this.router.navigate(['users', user.id, 'posts'], extrasData);
  }

}
