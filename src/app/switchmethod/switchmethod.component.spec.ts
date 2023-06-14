import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmethodComponent } from './switchmethod.component';

describe('SwitchmethodComponent', () => {
  let component: SwitchmethodComponent;
  let fixture: ComponentFixture<SwitchmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
