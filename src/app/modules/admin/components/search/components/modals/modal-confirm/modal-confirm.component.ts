import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { logs } from 'src/app/decorators/logs';
import { AdminService } from 'src/app/modules/admin/services/admin.service';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.less']
})
export class ModalConfirmComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ModalConfirmComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private adminService: AdminService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }

  @logs(`removeu um post`)
  public removePost() {
    this.adminService.deletePost(this.data.id).pipe(
      tap(() => {
        this.toastr.success('Post deletado com sucesso');
      })
    ).subscribe();
  }

}
