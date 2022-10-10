import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrisbeeComponent } from './components/frisbee/frisbee.component';
import { FrisbeeListComponent } from './components/frisbee-list/frisbee-list.component';
import { FrisbeeDetailComponent } from './components/frisbee-detail/frisbee-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeComponent,
    FrisbeeListComponent,
    FrisbeeDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
