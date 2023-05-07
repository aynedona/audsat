import { finalize, tap } from 'rxjs';
import { AdminService } from './../../../../../../services/admin.service';
import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/modules/admin/interfaces/posts';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmComponent } from '../../../modals/modal-confirm/modal-confirm.component';
import { logs } from 'src/app/decorators/logs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.less']
})
export class PostsListComponent implements OnInit{
  @Input() userId!: number;
  public postsUser!: Posts[];
  public clickButton: boolean = false;
  public loading: boolean = false;

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPostsUser(this.userId);
  }

  @logs('acessou a lista de posts do usuário')
  public getPostsUser(userId: number) {
    this.loading = true;
    this.adminService.getPostUser(userId).pipe(
      tap((posts: Posts[]) => {
        this.postsUser = posts;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
  }

  public deletePost(post: Posts) {
    this.clickButton = true;
    this.openDialog(post);
  }

  openDialog(post: Posts): void {
    this.dialog.open(ModalConfirmComponent, {
      width: '250px',
      data: post
    });
  }

  @logs('acessou os comentários do post')
  public clickPost() {
    this.clickButton = false;
  }

}
