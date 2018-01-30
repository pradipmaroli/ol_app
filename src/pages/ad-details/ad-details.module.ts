import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdDetailsPage } from './ad-details';

@NgModule({
  declarations: [
    AdDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdDetailsPage),
  ],
})
export class AdDetailsPageModule {}
