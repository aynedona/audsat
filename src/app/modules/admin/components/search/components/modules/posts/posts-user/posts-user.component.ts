import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/modules/admin/interfaces/users';

@Component({
  selector: 'app-posts-user',
  templateUrl: './posts-user.component.html',
  styleUrls: ['./posts-user.component.less']
})
export class PostsUserComponent implements OnInit {
  @Input() user!: Users;

  ngOnInit(): void {
  }

}
