import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyadsPage } from './myads';

@NgModule({
  declarations: [
    MyadsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyadsPage),
  ],
})
export class MyadsPageModule {}
