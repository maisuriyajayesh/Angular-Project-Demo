import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedloopMethodComponent } from './nestedloop-method.component';

describe('NestedloopMethodComponent', () => {
  let component: NestedloopMethodComponent;
  let fixture: ComponentFixture<NestedloopMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedloopMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedloopMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
