import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductsProvider } from '../../providers/products/products';
import { AuthProvider } from '../../providers/auth/auth';
import { AppconfigProvider } from '../../providers/appconfig/appconfig';
import { AddAdvertisePage } from '../add-advertise/add-advertise';
/**
 * Generated class for the MyadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myads',
  templateUrl: 'myads.html',
})
export class MyadsPage {
  results:any;
  resdata:any;
  publicUrl:string; 
  respose:boolean;
  norespose:boolean;
   pushPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public appconfig: AppconfigProvider,public productProvider:ProductsProvider) {
   this.respose=true;
   this.norespose=false;
   this.pushPage = AddAdvertisePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyadsPage');
    this.publicUrl = this.appconfig.baseApppublic; 
    console.log(this.publicUrl);
        this.productProvider.getmyproductlist().subscribe(res => {

          this.resdata = res;
          this.results = this.resdata.data;
          if(this.results.length>0){
            this.respose=true;
            this.norespose=false;
            console.log(this.results);
           // console.log(this.results[0].product_image[0].image);
          }else{
            this.respose = false;
            this.norespose=true;
          }
          
        }, error => {
            console.log(error);
        });
  }

}
