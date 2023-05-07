import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './components/admin-content/admin-content.component';

const routes: Routes = [
  { path: '', component: AdminContentComponent},
  { path: 'users', loadChildren: () => import('./components/search/components/modules/posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
