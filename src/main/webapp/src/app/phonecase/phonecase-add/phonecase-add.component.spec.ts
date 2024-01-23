import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseAddComponent } from './phonecase-add.component';

describe('PhonecaseAddComponent', () => {
  let component: PhonecaseAddComponent;
  let fixture: ComponentFixture<PhonecaseAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecaseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
