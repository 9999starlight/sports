import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportGroupListResolver } from '../sport/sport-group-list.resolver';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'sports/:group',
    loadChildren: () =>
      import('../sport/sport.module').then((m) => m.SportModule),
    /*resolve: {
      results: SportGroupListResolver,
    },*/
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
