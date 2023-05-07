import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterUsersComponent } from './filter-users.component';

describe('FilterUsersComponent', () => {
  let component: FilterUsersComponent;
  let fixture: ComponentFixture<FilterUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterUsersComponent]
    });
    fixture = TestBed.createComponent(FilterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
