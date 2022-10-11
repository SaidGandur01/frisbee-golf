import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrisbeeComponent } from './components/frisbee/frisbee.component';
import { FrisbeeListComponent } from './components/frisbee-list/frisbee-list.component';
import { FrisbeeDetailComponent } from './components/frisbee-detail/frisbee-detail.component';
import { FormsModule } from '@angular/forms';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeComponent,
    FrisbeeListComponent,
    FrisbeeDetailComponent,
    NotFoundPageComponent
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
