//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppconfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppconfigProvider {

	readonly baseAppUrl: string = 'http://udupirealestate.com/olxserver/public/api';
	readonly baseApppublic: string = 'http://udupirealestate.com/olxserver/public';
	//readonly baseAppUrl: string = 'http://127.0.0.1:8000/api';
 
}
