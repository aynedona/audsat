import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/modules/admin/interfaces/users';

@Component({
  selector: 'app-posts-history',
  templateUrl: './posts-history.component.html',
  styleUrls: ['./posts-history.component.less']
})
export class PostsHistoryComponent implements OnInit {
  public dataUser!: Users;

  ngOnInit(): void {
    this.dataUser = history.state.user;
  }

}
