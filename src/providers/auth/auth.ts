import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppconfigProvider } from '../appconfig/appconfig';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  baseAppUrl:string;		
  constructor(public http: HttpClient,public appconfig: AppconfigProvider,private storage: Storage) {
    console.log('Hello AuthProvider Provider');
    this.baseAppUrl = this.appconfig.baseAppUrl;
  }

  register(data){
  	var header = { "headers": {"Content-Type": "application/json"} };    
    return this.http.post(this.baseAppUrl+'/register',data,header);
  	// this.http.post(this.baseAppUrl+'/register',data,header).subscribe(data => {
   //     console.log('hi');
   //      console.log(data);
   //      }, error => {
   //      console.log(error);
   //    });

  }

  otpconfirm(data){
    console.log(data);
    var header = { "headers": {"Content-Type": "application/json"} };
    return this.http.post(this.baseAppUrl+'/otpconfirm',data,header);
  }


  gettoken(){
    return this.storage.get('token');
     //  this.storage.get('token').then((val) => {
     //    console.log('Your token is', val);
     //    return val;
     // });
  }


}
