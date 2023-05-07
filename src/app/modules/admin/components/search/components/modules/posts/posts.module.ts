import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsHistoryComponent } from './posts-history/posts-history.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsUserComponent } from './posts-user/posts-user.component';
import { PostsCommentsComponent } from './posts-comments/posts-comments.component';
import { PostsRoutingModule } from './posts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PostsHistoryComponent,
    PostsListComponent,
    PostsUserComponent,
    PostsCommentsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
