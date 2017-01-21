import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

	public platform;
	public nav;
  static get parameters() {
        return [[Platform], [NavController]];
    }
 
    constructor(platform, navController) {
        this.platform = platform;
        this.nav = navController;
    }

  scan() {
        this.platform.ready().then(() => {
            BarcodeScanner.scan().then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error)
            });
        });
    }

}
