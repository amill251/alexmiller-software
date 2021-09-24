import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { LandingBodyComponent } from './components/landing-body/landing-body.component';


@NgModule({
  declarations: [
    CoreComponent,
    MenuComponent,
    LandingBodyComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
