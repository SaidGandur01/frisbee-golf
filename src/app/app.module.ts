import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FrisbeeComponent } from './components/frisbee/frisbee.component';
import { FrisbeeDetailComponent } from './components/frisbee-detail/frisbee-detail.component';
import { FrisbeeListComponent } from './components/frisbee-list/frisbee-list.component';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FrisbeeComponent,
    FrisbeeDetailComponent,
    FrisbeeListComponent,
    NotFoundPageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
