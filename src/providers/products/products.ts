import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppconfigProvider } from '../appconfig/appconfig';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../auth/auth';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {
  token:any;	
  baseAppUrl:string;
  constructor(public http: HttpClient,public appconfig: AppconfigProvider,public auth:AuthProvider,private storage: Storage) {
    console.log('Hello ProductsProvider Provider');    
    this.baseAppUrl = this.appconfig.baseAppUrl;    
  }

  // getproductlist(){ 
  //    var that = this; 	
  //   var dataPromise = this.auth.gettoken();   
  //   dataPromise.then(token => {
  //     console.log(token);
  //     return that.http.get(this.baseAppUrl+'/getproductlist?token='+token);
  //   });
    
  //  // this.storage.get('token').then((val) => {
  //  //   this.token = val;           
  //  //   return this.getdata(this.token);
  //  // });
    
  // }

  getproductlist(): Observable<any> {   
    return Observable.fromPromise(this.storage.get('token')).mergeMap((val) => { 
      return this.http.get(this.baseAppUrl+'/getproductlist?token='+val);
    });
  }

  getmyproductlist(): Observable<any> {   
    return Observable.fromPromise(this.storage.get('token')).mergeMap((val) => { 
      return this.http.get(this.baseAppUrl+'/getmyproductlist?token='+val);
    });
  }

  getproductdetails(id) {   
     return this.http.get(this.baseAppUrl+'/getproductdetails/'+id);   
  }

  // getproductlist(token){   
  //     return this.http.get(this.baseAppUrl+'/getproductlist?token='+token);   
  // }

 
}
