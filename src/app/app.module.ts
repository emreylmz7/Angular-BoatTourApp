import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BoatToursComponent } from './boat-tours/boat-tours.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BaysComponent } from './bays/bays.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BoatToursComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PricesComponent,
    GalleryComponent,
    BaysComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
