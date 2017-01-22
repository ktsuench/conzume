import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ScannerPage } from '../scanner/scanner';

@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {
  private retailers;

  constructor(public navCtrl: NavController) {
    this.retailers = [
      "Walmart",
      "Loblaws",
      "Shoppers Drugmart",
      "Sobeys",
      "Rexall",
      "Nordstrom",
      "Metro",
      "Bestbuy"
    ];
  }

  sendToScanner(retailer: string) {
    if ( retailer.indexOf(" ") > -1 ) {
      retailer = retailer.substr(0, retailer.indexOf(" "));
    }
    this.navCtrl.push(ScannerPage, retailer);
  }

}
