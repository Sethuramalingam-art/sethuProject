import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackSubmissonComponent } from './feed-back-submisson.component';

describe('FeedBackSubmissonComponent', () => {
  let component: FeedBackSubmissonComponent;
  let fixture: ComponentFixture<FeedBackSubmissonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedBackSubmissonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackSubmissonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
