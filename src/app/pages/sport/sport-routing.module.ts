import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventQuotasComponent } from './event-quotas/event-quotas.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupSubeventsComponent } from './group-subevents/group-subevents.component';
import { SportGroupListResolver } from './sport-group-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: GroupListComponent,
    resolve: {
      results: SportGroupListResolver,
    },
  },
  {
    path: ':subevent',
    component: GroupSubeventsComponent
  },
  {
    path: ':subevent/:quotas',
    component: EventQuotasComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportRoutingModule { }
