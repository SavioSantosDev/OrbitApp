import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SvgsComponent } from './components/svgs/svgs.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CtaComponent } from './components/cta/cta.component';
import { VideoComponent } from './components/video/video.component';
import { FeaturesComponent } from './components/features/features.component';
import { FunctionalitiesComponent } from './components/functionalities/functionalities.component';
import { Cta2Component } from './components/cta2/cta2.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgsComponent,
    NavbarComponent,
    CtaComponent,
    VideoComponent,
    FeaturesComponent,
    FunctionalitiesComponent,
    Cta2Component,
    ClientsComponent,
    PricingComponent,
    NewsletterComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
