import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopmethodComponent } from './loopmethod.component';

describe('LoopmethodComponent', () => {
  let component: LoopmethodComponent;
  let fixture: ComponentFixture<LoopmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
