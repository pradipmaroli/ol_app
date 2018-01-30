import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-otp',
  templateUrl: 'otp.html',
})
export class OtpPage {
  mobile:any;	
  mobileno:any;
  data:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,private storage: Storage) {
  	this.mobile = navParams.get('mobile');
  	this.mobileno = this.mobile;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtpPage');
  }

  otpconfirm(otpdata:any){
  	//otpdata.mobile = this.mobile;
  	this.auth.otpconfirm(otpdata.value).subscribe(res => { 
  		this.data = res;
  		console.log(this.data.token);
  		this.storage.ready().then(() => {
  			console.log('storage ready!');
  			this.storage.set('token',this.data.token);
  				this.navCtrl.push(HomePage);
		    });
  		
  	// 	this.storage.get('token').then((val) => {
	  //   console.log('Your token is', val);
	  // });
  	}, error => {
        console.log(error);
    });


  	// this.auth.otpconfirm(otp.value).subscribe(res => {
  	// 	console.log(res);
  	// }, error => {
   //      console.log(error);
   //  });

  }
}
