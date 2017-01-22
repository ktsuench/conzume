import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentPage } from '../payment/payment';
/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})

export class CheckoutPage {

	posts: any = [];
	totalPrice;
	HST;
	company;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams);
  	//navParams.get('data');
  	this.posts = navParams.get('items');
  	this.company = navParams.get('company');
  	this.total_sum();
  }

  changePage(){
  	console.log("going there..");
  	this.navCtrl.push(PaymentPage, {'items':this.posts, 'company':this.company, 'price':this.totalPrice});
  }

  deleteNote(note){
 
        let index = this.posts.indexOf(note);
 
        if(index > -1){
            this.posts.splice(index, 1);
        }
        this.total_sum();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  total_sum(){
  	var i; 
  	var sum = 0;
  	for(i=0; i<this.posts.length;i++){
  		sum += this.posts[i].itemPrice;
  	}
  	console.log(sum);
  	this.HST = 0.13 * sum;
  	var a = sum + this.HST;
  	this.HST = this.HST.toFixed(2);
  	this.totalPrice = (a).toFixed(2);

  }

  

}
