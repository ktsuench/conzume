import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import {CheckoutPage} from '../checkout/checkout';


@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

	public platform;
	public nav;
    public http; 

	posts: any = [{"itemId":"0605388881243","itemName":"Great Value Natural Spring Water","itemPrice":0.99,"itemQuantity":5},{"itemId":"0605388881243","itemName":"Great Value Natural Spring Water","itemPrice":0.99,"itemQuantity":5}];

  static get parameters() {
        return [[Platform], [NavController], [Http]];
    }
 
    constructor(platform, navController, http) {
        
        this.platform = platform;
        this.nav = navController;
        this.http = http;
    }

  scan() {
    this.platform.ready().then(() => {
        BarcodeScanner.scan().then((result) => {
            console.log(result.text);       
            this.http.get('http://ireceipt.azurewebsites.net/api/items/' + result.text)
                .map(res => res.json())
                .subscribe(data => {
                    //console.log(data);
                    this.posts.push(data);
                    
                });

        }, (error) => {

                console.log(error)

            });
        });
    }

    changePage() {
        this.nav.push(CheckoutPage, this.posts);
    }

    editNote(note){
 
 
    }
 
    deleteNote(note){
 
        let index = this.posts.indexOf(note);
 
        if(index > -1){
            this.posts.splice(index, 1);
        }
    }


}
