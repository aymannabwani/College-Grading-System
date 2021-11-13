import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentCoursesComponent } from './update-student-courses.component';

describe('UpdateStudentCoursesComponent', () => {
  let component: UpdateStudentCoursesComponent;
  let fixture: ComponentFixture<UpdateStudentCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudentCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
