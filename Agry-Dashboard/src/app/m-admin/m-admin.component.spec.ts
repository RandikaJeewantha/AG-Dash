import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAdminComponent } from './m-admin.component';

describe('MAdminComponent', () => {
  let component: MAdminComponent;
  let fixture: ComponentFixture<MAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
