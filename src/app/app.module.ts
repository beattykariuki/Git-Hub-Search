import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HubService } from './hub.service';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
