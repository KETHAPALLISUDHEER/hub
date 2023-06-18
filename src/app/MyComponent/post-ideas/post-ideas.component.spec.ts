import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIdeasComponent } from './post-ideas.component';

describe('PostIdeasComponent', () => {
  let component: PostIdeasComponent;
  let fixture: ComponentFixture<PostIdeasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostIdeasComponent]
    });
    fixture = TestBed.createComponent(PostIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
