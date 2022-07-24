import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSubeventsComponent } from './group-subevents.component';

describe('GroupSubeventsComponent', () => {
  let component: GroupSubeventsComponent;
  let fixture: ComponentFixture<GroupSubeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSubeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupSubeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
