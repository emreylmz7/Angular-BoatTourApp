import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoatToursComponent } from './boat-tours/boat-tours.component';
import { AboutComponent } from './about/about.component';
import { PricesComponent } from './prices/prices.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BaysComponent } from './bays/bays.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tours', component: BoatToursComponent },
  {path: 'about', component: AboutComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'adrasan-bays', component: BaysComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
