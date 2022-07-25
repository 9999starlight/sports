import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportRoutingModule } from './sport-routing.module';
import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupSubeventsComponent } from './group-subevents/group-subevents.component';
import { EventQuotasComponent } from './event-quotas/event-quotas.component';
import { ActiveOddGroupsComponent } from './active-odd-groups/active-odd-groups.component';

@NgModule({
  declarations: [
    GroupListComponent,
    GroupSubeventsComponent,
    EventQuotasComponent,
    ActiveOddGroupsComponent,
  ],
  imports: [
    CommonModule,
    SportRoutingModule,
    SharedModule
  ]
})
export class SportModule { }
