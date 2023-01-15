import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgxTypedJsModule} from 'ngx-typed-js';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { MainComponent } from './components/main/main.component';
import { MainAboutComponent } from './components/main-about/main-about.component';
import { MainFactsComponent } from './components/main-facts/main-facts.component';
import { MainSkillsComponent } from './components/main-skills/main-skills.component';
import { MainResumeComponent } from './components/main-resume/main-resume.component';
import { MainPortfolioComponent } from './components/main-portfolio/main-portfolio.component';
import { MainServiceComponent } from './components/main-service/main-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContactComponent } from './components/main-contact/main-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    MainComponent,
    MainAboutComponent,
    MainFactsComponent,
    MainSkillsComponent,
    MainResumeComponent,
    MainPortfolioComponent,
    MainServiceComponent,
    MainContactComponent
  ],
  imports: [
    BrowserModule,
    NgxTypedJsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
