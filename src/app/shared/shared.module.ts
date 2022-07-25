import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ExpandableComponent } from './components/expandable/expandable.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LogoComponent } from './components/layout/header/logo/logo.component';
import { LoaderComponent } from './widgets/loader/loader.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    ExpandableComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    LoaderComponent,
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    ExpandableComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    OverlayComponent,
  ]
})
export class SharedModule { }
