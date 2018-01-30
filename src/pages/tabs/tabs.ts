import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { AddAdvertisePage } from '../add-advertise/add-advertise';
import { MyadsPage } from '../myads/myads';

import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = MyadsPage;
  tab4Root = AddAdvertisePage;

  constructor(private storage: Storage,public navCtrl: NavController) {
      //this.storage.clear();
  	  this.storage.get('token').then((val) => {
        console.log(val); 
	    if(val==null){ 
	    	this.navCtrl.push(SignupPage);
	    } 
	  });
  }
}
