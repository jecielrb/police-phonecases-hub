import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceAddComponent } from './police-add.component';

describe('PoliceAddComponent', () => {
  let component: PoliceAddComponent;
  let fixture: ComponentFixture<PoliceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
