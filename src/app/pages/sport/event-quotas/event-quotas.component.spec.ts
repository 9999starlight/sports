import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventQuotasComponent } from './event-quotas.component';

describe('EventQuotasComponent', () => {
  let component: EventQuotasComponent;
  let fixture: ComponentFixture<EventQuotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventQuotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventQuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
