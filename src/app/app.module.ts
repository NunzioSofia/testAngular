import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { GeneralDetailComponent } from './general-detail/general-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HambugermenuComponent} from './hambugermenu/hambugermenu.component'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {DeviceStatusComponent} from './device-status/device-status.component'
@NgModule({
  declarations: [
    AppComponent,
    GeneralDetailComponent,
    HambugermenuComponent,
    DeviceStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
