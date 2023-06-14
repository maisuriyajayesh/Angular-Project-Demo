import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMethodComponent } from './pipe-method.component';

describe('PipeMethodComponent', () => {
  let component: PipeMethodComponent;
  let fixture: ComponentFixture<PipeMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
