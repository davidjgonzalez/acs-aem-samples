import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {ContentService} from './services/content.service';
import {ConfigService} from './services/config.service';
import {HeroFactoryService} from './factories/heroFactory.service'
import {ExperienceFragmentFactoryService} from './factories/experienceFragmentFactory.service';
import {ContentFragmentFactoryService} from './factories/contentFragmentFactory.service';

import {ExperienceFragmentsComponent} from './components/experience-fragments/experience-fragments.component';
import {ContentFragmentsComponent} from './components/content-fragments/content-fragments.component';

import {HeroComponent} from './components/hero/hero.component';
import {AppComponent} from './components/app/app.component';
import {ExternalizerPipe} from './pipes/externalizer.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceFragmentsComponent,
    ContentFragmentsComponent,
    HeroComponent,
    ExternalizerPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: 'content', useClass: ContentService },
    { provide: 'config', useClass: ConfigService },
    { provide: 'heroFactory', useClass: HeroFactoryService },
    { provide: 'experienceFragmentFactory', useClass: ExperienceFragmentFactoryService },
    { provide: 'contentFragmentFactory', useClass: ContentFragmentFactoryService },

    ConfigService // For Pipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
