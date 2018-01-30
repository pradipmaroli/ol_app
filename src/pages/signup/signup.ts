import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { OtpPage } from '../otp/otp';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  data:any;
  errmob:boolean;
  errmobmsg:string;
  errname:boolean;
  errnamemsg:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:AuthProvider,public androidPermissions: AndroidPermissions) {
    this.errmob=false;
    this.errname=false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');    
    
  }




  register(signup: any){
  	console.log(signup.value);
    this.auth.register(signup.value).subscribe(res => {       
       this.data = res;  
       console.log(this.data);   
       if(this.data.success=='true'){
         if(this.data.msg=='otpsent'){
           this.navCtrl.push(OtpPage, {mobile: this.data.mobile});
         }
       }else{
          if (this.data.errors.mobile!='') {
           this.errmob=true;
           this.errmobmsg = this.data.errors.mobile;
         }
         if (this.data.errors.name!='') {
           this.errname=true;
           this.errnamemsg = this.data.errors.name;
         }
       }
       
      
       
       // if(this.data.errors.length>0){

       // }else{
       //   this.navCtrl.push(OtpPage, {mobile: this.data.mobile});
       // }
       
        // this.platform.ready().then((readySource) => {
        //   if(SMS) SMS.startWatch(()=>{
        //              console.log('watching started');
        //           }, Error=>{
        //          console.log('failed to start watching');
        //      });

        //     document.addEventListener('onSMSArrive', (e:any)=>{
        //          var sms = e.data;
        //          console.log(sms);

        //          });
               
        //       });

      }, error => {
        console.log(error);
      });

  }
}
