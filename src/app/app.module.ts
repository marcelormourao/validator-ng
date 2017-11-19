import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AutoCompleteModule, CalendarModule,  ButtonModule} from 'primeng/primeng';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { PanelFormGroupService } from './panel/panel-form-group.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    ButtonModule,
    AutoCompleteModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [PanelFormGroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
