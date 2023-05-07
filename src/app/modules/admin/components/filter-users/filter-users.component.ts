import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.less']
})
export class FilterUsersComponent implements OnInit{
  public formFilter!: FormGroup;

  @Output() filterChange: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  public createForm() {
    this.formFilter = this.formBuilder.group({
      name: [''],
      username: [''],
      email: ['', Validators.email],
    })
  }

  public applyFilter() {
    this.filterChange.emit(this.formFilter.value);
  }

}
