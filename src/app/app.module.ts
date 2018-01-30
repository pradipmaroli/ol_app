import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AndroidPermissions} from '@ionic-native/android-permissions';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';
import { FileTransfer,FileTransferObject } from '@ionic-native/file-transfer';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { MyadsPage } from '../pages/myads/myads';
import { OtpPage } from '../pages/otp/otp';
import { AddAdvertisePage } from '../pages/add-advertise/add-advertise';
import { AdDetailsPage } from '../pages/ad-details/ad-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { FormsModule } from '@angular/forms';
import { AuthProvider } from '../providers/auth/auth';
import { AppconfigProvider } from '../providers/appconfig/appconfig';
import { ProductsProvider } from '../providers/products/products';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    OtpPage,
    AddAdvertisePage,
    MyadsPage,
    AdDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SignupPage,
    OtpPage,
    AddAdvertisePage,
    MyadsPage,
    AdDetailsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    FileTransferObject,
    AuthProvider,
    AppconfigProvider,
    AndroidPermissions,
    ProductsProvider,
    Camera
  ]
})
export class AppModule {}
