import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommentsComponent } from './main-comments.component';

describe('MainCommentsComponent', () => {
  let component: MainCommentsComponent;
  let fixture: ComponentFixture<MainCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
