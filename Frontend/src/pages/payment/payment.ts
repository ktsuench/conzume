import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import {SuccessPage} from "../success/success";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

	posts: any = [];
	totalPrice;
	company;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  	this.posts = navParams.get('items');
  	this.company = navParams.get('company');
  	this.totalPrice = navParams.get('price');
  }

  presentLoading(name) {
    let loader = this.loadingCtrl.create({
      content: "Processing...",
      duration: 4050
    });

    loader.present();

    this.navCtrl.push(SuccessPage, {'items':this.posts, 'company':this.company, 'price':this.totalPrice, 'bank': name });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
