import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgryComponent } from './admin-agry.component';

describe('AdminAgryComponent', () => {
  let component: AdminAgryComponent;
  let fixture: ComponentFixture<AdminAgryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
