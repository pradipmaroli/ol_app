import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { AuthProvider } from '../../providers/auth/auth';
import { AppconfigProvider } from '../../providers/appconfig/appconfig';
import { Storage } from '@ionic/storage';
import { AdDetailsPage } from '../ad-details/ad-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results:any;
  resdata:any;
  publicUrl:string;
  constructor(private storage: Storage,public navCtrl: NavController,public productProvider:ProductsProvider,public auth:AuthProvider,public appconfig: AppconfigProvider) {
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad homepage');
    // this.publicUrl = this.appconfig.baseApppublic;
    // console.log(this.publicUrl);
    // var dataPromise = this.auth.gettoken();   
    // dataPromise.then(token => {
    //     this.productProvider.getproductlist(token).subscribe(res => {
    //     	this.resdata = res;
    //       this.results = this.resdata.data;
    //       console.log(this.results[0].product_image[0].image);
    //     }, error => {
    //         console.log(error);
    //     });

    //   });
    this.publicUrl = this.appconfig.baseApppublic;
    console.log(this.publicUrl);
        this.productProvider.getproductlist().subscribe(res => {
          this.resdata = res;
          this.results = this.resdata.data;
          console.log(this.results[0].product_image[0].image);
        }, error => {
           this.storage.clear();
            console.log(error);
        });

      
  }

  detailspageush(id){
    this.navCtrl.push(AdDetailsPage, {id: id}); 
  }
}
