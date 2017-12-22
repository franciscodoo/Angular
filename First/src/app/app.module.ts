import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //created components must be imported here

import { WarningAlertComponent} from './warning-alert/warning-alert.component';
import { SuccessAlertComponent} from './success-alert/success-alert.component';

//decorator...
@NgModule({
  declarations: [ //created components must be declared here
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

//empty typescript class...
export class AppModule { }
