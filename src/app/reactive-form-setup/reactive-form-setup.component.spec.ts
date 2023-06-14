import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSetupComponent } from './reactive-form-setup.component';

describe('ReactiveFormSetupComponent', () => {
  let component: ReactiveFormSetupComponent;
  let fixture: ComponentFixture<ReactiveFormSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSetupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
