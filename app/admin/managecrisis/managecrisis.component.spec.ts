import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecrisisComponent } from './managecrisis.component';

describe('ManagecrisisComponent', () => {
  let component: ManagecrisisComponent;
  let fixture: ComponentFixture<ManagecrisisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecrisisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagecrisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
