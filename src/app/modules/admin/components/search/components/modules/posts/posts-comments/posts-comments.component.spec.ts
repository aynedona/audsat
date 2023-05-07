import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCommentsComponent } from './posts-comments.component';

describe('PostsCommentsComponent', () => {
  let component: PostsCommentsComponent;
  let fixture: ComponentFixture<PostsCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsCommentsComponent]
    });
    fixture = TestBed.createComponent(PostsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
