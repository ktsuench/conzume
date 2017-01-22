import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReceiptsPage } from '../receipts/receipts';

/*
  Generated class for the Receipt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html'
})
export class ReceiptPage {
	posts: any = [];
	price;
	company;
	bank;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.posts = navParams.get('items');
  	this.company = navParams.get('company');
  	this.price = navParams.get('price');
  	this.bank = navParams.get('bank');

  	ReceiptsPage.createReceipt(this.posts, this.price, this.company, this.bank);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiptPage');
  }

}
