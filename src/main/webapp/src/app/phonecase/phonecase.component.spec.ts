import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecaseComponent } from './phonecase.component';

describe('PhonecaseComponent', () => {
  let component: PhonecaseComponent;
  let fixture: ComponentFixture<PhonecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonecaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
