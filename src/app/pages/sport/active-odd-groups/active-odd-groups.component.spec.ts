import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOddGroupsComponent } from './active-odd-groups.component';

describe('ActiveOddGroupsComponent', () => {
  let component: ActiveOddGroupsComponent;
  let fixture: ComponentFixture<ActiveOddGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveOddGroupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOddGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
