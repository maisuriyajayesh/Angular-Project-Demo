import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcomponetmethodComponent } from './childcomponetmethod.component';

describe('ChildcomponetmethodComponent', () => {
  let component: ChildcomponetmethodComponent;
  let fixture: ComponentFixture<ChildcomponetmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcomponetmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcomponetmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
