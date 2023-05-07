import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Comments } from 'src/app/modules/admin/interfaces/comments';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.less']
})
export class PostsCommentsComponent implements OnInit {
  @Input() postId!: number;
  public commentPost!: Comments[];

  constructor(
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.adminService.getCommentPost(this.postId).pipe(
      tap((comment: Comments[]) => {
        this.commentPost = comment;
      })
    ).subscribe()
  }
}
