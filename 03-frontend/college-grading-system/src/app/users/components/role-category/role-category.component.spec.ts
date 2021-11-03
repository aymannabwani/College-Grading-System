import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCategoryComponent } from './role-category.component';

describe('RoleCategoryComponent', () => {
  let component: RoleCategoryComponent;
  let fixture: ComponentFixture<RoleCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
