import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: '**',
    component: NoPageFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
