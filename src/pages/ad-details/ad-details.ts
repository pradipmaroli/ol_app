import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { AppconfigProvider } from '../../providers/appconfig/appconfig';
/**
 * Generated class for the AdDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ad-details',
  templateUrl: 'ad-details.html',
})
export class AdDetailsPage {
  id: number;
  results:any;
  resdata:any;
  publicUrl:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public productProvider:ProductsProvider,public appconfig: AppconfigProvider) {
  	this.id = navParams.get('id');
  	console.log(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdDetailsPage');
    this.publicUrl = this.appconfig.baseApppublic;
    console.log(this.publicUrl);
        this.productProvider.getproductdetails(this.id).subscribe(res => {
          this.resdata = res;
          this.results = this.resdata.data;
          //console.log(this.results);
          //console.log(this.results.product_image[0].image);
        }, error => {
            console.log(error);
        });
  }

}
