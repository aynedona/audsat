import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminContentComponent } from './components/admin-content/admin-content.component';
import { FilterUsersComponent } from './components/filter-users/filter-users.component';
import { SearchListComponent } from './components/search/components/search-list/search-list.component';
import { AdminService } from './services/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalConfirmComponent } from './components/search/components/modals/modal-confirm/modal-confirm.component';


@NgModule({
  declarations: [
    AdminContentComponent,
    FilterUsersComponent,
    SearchListComponent,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [
    AdminService
  ],
})
export class AdminModule { }
