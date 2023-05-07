import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { finalize, tap } from 'rxjs';
import { Users } from '../../interfaces/users';
import { ToastrService } from 'ngx-toastr';
import { logs } from 'src/app/decorators/logs';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.less']
})
export class AdminContentComponent implements OnInit {
  public loading: boolean = false;
  public listUser: Users[] | undefined;

  constructor(
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getDataUsers();
  }

  public emitFilterChange(event: any) {
    let queryParam = '';
    let operator: string;
    Object.keys(event).forEach(key => {
      operator = queryParam == '' ? '?' : '&';
      if(event[key] != "") queryParam +=`${operator}${key}=${event[key]}`;
    });

    if(!queryParam)
      this.toastr.info('Para refinar sua busca utilize o filtro.');

    this.getDataUsers(queryParam);
  }


  @logs('acessou a busca de usuários')
  public getDataUsers(query?: string) {
    this.loading = true;
    this.adminService.getListUsers(query).pipe(
      tap((users: Users[]) => {
        this.listUser = users;
      }),
      finalize(() => this.loading = false)
    ).subscribe();
  }

}
