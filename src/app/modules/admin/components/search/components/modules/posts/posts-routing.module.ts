import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsHistoryComponent } from './posts-history/posts-history.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':userId/posts',
        component: PostsHistoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
