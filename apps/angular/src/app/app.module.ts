import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ContentService} from './services/content.service';
import {ConfigService} from './services/config.service';
import {KeywordFilterPipe} from './pipes/keyword-filter.pipe';
import {AppComponent} from './app.component';
import {FragmentsComponent} from './components/fragments/fragments.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    FragmentsComponent,
    KeywordFilterPipe,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'content', useClass: ContentService },
    { provide: 'config', useClass: ConfigService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
