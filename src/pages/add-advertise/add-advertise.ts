import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AppconfigProvider } from '../../providers/appconfig/appconfig';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddAdvertisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-advertise',
  templateUrl: 'add-advertise.html',
})
export class AddAdvertisePage {

  catid:any;	
  imageURI:any;
  imageFileName:any;
  publicUrl:string;
  //private imageSrc: string;
  baseAppUrl:string;
  productname:any;
  price:any;
  desc:any;
  isClassErrPhoto:boolean;
  isClassErrCatgory:boolean;
  isClassErrProd:boolean;
  isClassErrPrice:boolean;
  token:any;
  result:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private transfer: FileTransfer,
  private camera: Camera,
  public loadingCtrl: LoadingController,
  public toastCtrl: ToastController,public appconfig: AppconfigProvider,private storage: Storage) {
  	this.publicUrl = this.appconfig.baseApppublic;
  	this.baseAppUrl = this.appconfig.baseAppUrl;
  	this.isClassErrPhoto = false;
  	this.isClassErrCatgory=false;
  	this.isClassErrProd=false;
  	this.isClassErrPrice=false;
  	this.storage.get('token').then((val) => {
  		this.token = val;
  	});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAdvertisePage');

  }

  ad_cat(id){
  	this.isClassErrCatgory = false;
  	this.catid = id;
  	console.log('catid');
  	console.log(this.catid);
  }

  getImage() {	  

	  // const options: CameraOptions = {
	  //   quality: 100,
	  //   destinationType: this.camera.DestinationType.FILE_URI,
	  //   sourceType: 0,
	  //   mediaType:0 
	  // }
	  this.isClassErrPhoto = false;
	 const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.FILE_URI
		}

	  this.camera.getPicture(options).then((imageData) => {
	    this.imageURI = imageData;
	  }, (err) => {
	    console.log(err);
	    this.presentToast(err);
	  });
	}

	uploadFile() {
	  this.isClassErrProd = false;	
	  if(!this.imageURI){
	  	this.isClassErrPhoto = true;
	  	return;
	  }
	  if(!this.catid){
	  	this.isClassErrCatgory = true;
	  	return;
	  }
	  if(!this.productname){
	  	this.isClassErrProd = true;
	  	return;
	  }
	  if(!this.price){
	  	this.isClassErrPrice = true;
	  	return;
	  }
	  console.log(this.token);
	  let loader = this.loadingCtrl.create({
	    content: "Uploading..."
	  });
	  loader.present();
	  const fileTransfer: FileTransferObject = this.transfer.create();

	  let options: FileUploadOptions = {
	    fileKey: 'ionicfile',
	    fileName: 'ionicfile',
	    chunkedMode: false,
	    mimeType: "image/jpeg",
	   // headers: {Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjgsImlzcyI6Imh0dHA6Ly91ZHVwaXJlYWxlc3RhdGUuY29tL29seHNlcnZlci9wdWJsaWMvYXBpL290cGNvbmZpcm0iLCJpYXQiOjE1MTcyMjA0NzksImV4cCI6MTUxNzIyNDA3OSwibmJmIjoxNTE3MjIwNDc5LCJqdGkiOiJEWDJteGRhWnBOdWpLOE5FIn0.BIi8ta_gSMCS8Nhb-YD7WD-9s0MMl5pPTmZL_OAxt44'},
	    params : {'catid': this.catid,'product':this.productname,'price':this.price,'desc':this.desc}
	  } 
	  // var headers = {'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjksImlzcyI6Imh0dHA6Ly91ZHVwaXJlYWxlc3RhdGUuY29tL29seHNlcnZlci9wdWJsaWMvYXBpL290cGNvbmZpcm0iLCJpYXQiOjE1MTcyMjY0OTQsImV4cCI6MTg3NzIyNjQ5NCwibmJmIjoxNTE3MjI2NDk0LCJqdGkiOiJDU2dJZlE4Q0h4S1QyeWFJIn0.Eo9ZtL_5InTD-dicYZdFpNlDpT-5ZHvH5wEh5zvYyvE'};
	  // options.headers = headers;
	  fileTransfer.upload(this.imageURI, this.baseAppUrl+'/add_ad?token='+this.token, options)
	    .then((data) => {
	    // 	console.log(data.success);
	    // console.log(data+" Uploaded Successfully");
	    // this.imageFileName = this.publicUrl+"/images/ionicfile.jpg";
	    loader.dismiss();
	    this.presentToast("Ad updated successfully");

	  }, (err) => {
	    console.log(err);
	    loader.dismiss();
	    this.presentToast(err);
	  });
	}

	presentToast(msg) {
		  let toast = this.toastCtrl.create({
		    message: msg,
		    duration: 3000,
		    position: 'bottom'
		  });

		  toast.onDidDismiss(() => {
		    console.log('Dismissed toast');
		  });

		  toast.present();
	}


	// private openGallery (): void {
	//   let cameraOptions = {
	//     sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	//     destinationType: Camera.DestinationType.FILE_URI,      
	//     quality: 100,
	//     targetWidth: 1000,
	//     targetHeight: 1000,
	//     encodingType: Camera.EncodingType.JPEG,      
	//     correctOrientation: true
	//   }

	//   Camera.getPicture(cameraOptions)
	//     .then(file_uri => this.imageSrc = file_uri, 
	//     err => console.log(err));   
	// }

}
