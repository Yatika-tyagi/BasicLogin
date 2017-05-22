import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { FacebookComponent } from './facebook/facebook.component';
import {appRouting} from './app.routing';
import { FacebookModule } from 'ngx-facebook';
import { TwitterComponent } from './twitter/twitter.component';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent,
    TwitterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    FacebookModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
