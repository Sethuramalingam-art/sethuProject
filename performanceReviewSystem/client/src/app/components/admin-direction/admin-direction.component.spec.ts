import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDirectionComponent } from './admin-direction.component';

describe('AdminDirectionComponent', () => {
  let component: AdminDirectionComponent;
  let fixture: ComponentFixture<AdminDirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
