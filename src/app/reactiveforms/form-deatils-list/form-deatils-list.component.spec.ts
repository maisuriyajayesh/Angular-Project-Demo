import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeatilsListComponent } from './form-deatils-list.component';

describe('FormDeatilsListComponent', () => {
  let component: FormDeatilsListComponent;
  let fixture: ComponentFixture<FormDeatilsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDeatilsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeatilsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
