import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModalListTableComponent } from './add-modal-list-table.component';

describe('AddModalListTableComponent', () => {
  let component: AddModalListTableComponent;
  let fixture: ComponentFixture<AddModalListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModalListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModalListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
