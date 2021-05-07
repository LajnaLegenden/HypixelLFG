import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCoreComponent } from './posts-core.component';

describe('PostsCoreComponent', () => {
  let component: PostsCoreComponent;
  let fixture: ComponentFixture<PostsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
