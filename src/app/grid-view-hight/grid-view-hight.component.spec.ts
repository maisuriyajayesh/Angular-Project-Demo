import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridViewHightComponent } from './grid-view-hight.component';

describe('GridViewHightComponent', () => {
  let component: GridViewHightComponent;
  let fixture: ComponentFixture<GridViewHightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridViewHightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridViewHightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
