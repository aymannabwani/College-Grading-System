import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTeacherCoursesComponent } from './update-teacher-courses.component';

describe('UpdateTeacherCoursesComponent', () => {
  let component: UpdateTeacherCoursesComponent;
  let fixture: ComponentFixture<UpdateTeacherCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTeacherCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeacherCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
