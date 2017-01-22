import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';

@Component({
  selector: 'page-receipts',
  templateUrl: 'receipts.html'
})

export class ReceiptsPage {

  public receipts;

  constructor(public navCtrl: NavController, public navParam: NavParams) {
    if (localStorage.getItem("receipts")) {
      this.receipts = JSON.parse(localStorage.getItem("receipts"));
    } else {
      this.receipts = [];
    }
    console.log(this.receipts);
  }

  public static createReceipt(items, price, company, bank) {
    let date = new Date();
    let day = date.getDate().toString();
    let month = ((date.getMonth() + 1).toString().length < 2 ? "0" + (date.getMonth() + 1).toString() : date.getMonth() + 1).toString();
    let year = date.getFullYear().toString();

    let name = company + "-" + month + "-" + day + "-" + year;
    let receipt = {
      name: name,
      date: date,
      items: items,
      price: price,
      company: company,
      bank: bank
    }

    ReceiptsPage.addReceipt(receipt);
  }

  public static addReceipt(receipt) {
    //ReceiptsPage.receipts.push(receipt);
    console.log(receipt);

    var temp;

    if (localStorage.getItem("receipts")) {
      temp = JSON.parse(localStorage.getItem("receipts"));
    } else {
      temp = [];
    }

    temp.push(receipt);
    localStorage.setItem("receipts", JSON.stringify(temp));
  }

  receiptSelected(receipt) {
    this.navCtrl.push(ReceiptPage, {'items':receipt.items, 'company':receipt.company, 'price': receipt.price, 'bank': receipt.bank});
  }

}
