import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

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
      "Shoppers Drug Mart",
      "Sobeys",
      "Rexall",
      "Nordstrom",
      "Metro"
    ];
  }

}
