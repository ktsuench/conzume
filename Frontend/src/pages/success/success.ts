import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ReceiptPage} from '../receipt/receipt';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {

	posts: any = [];
	totalPrice;
	company;
	bank;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.posts = navParams.get('items');
  	this.company = navParams.get('company');
  	this.totalPrice = navParams.get('price');
  	this.bank = navParams.get('bank');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessPage');
  }

  changePage(){
  	this.navCtrl.push(ReceiptPage, {'items':this.posts, 'company':this.company, 'price':this.totalPrice, 'bank': name});
  }

}
