import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdvertisePage } from './add-advertise';

@NgModule({
  declarations: [
    AddAdvertisePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdvertisePage),
  ],
})
export class AddAdvertisePageModule {}
