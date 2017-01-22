import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(navParams);
  	navParams.get('data');
  	this.posts = navParams.data;
  }

  deleteNote(note){
 
        let index = this.posts.indexOf(note);
 
        if(index > -1){
            this.posts.splice(index, 1);
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

}
