import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaketodolistComponent } from './maketodolist.component';

describe('MaketodolistComponent', () => {
  let component: MaketodolistComponent;
  let fixture: ComponentFixture<MaketodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaketodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaketodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
