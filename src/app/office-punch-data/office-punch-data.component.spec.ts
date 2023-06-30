import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePunchDataComponent } from './office-punch-data.component';

describe('OfficePunchDataComponent', () => {
  let component: OfficePunchDataComponent;
  let fixture: ComponentFixture<OfficePunchDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficePunchDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficePunchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
