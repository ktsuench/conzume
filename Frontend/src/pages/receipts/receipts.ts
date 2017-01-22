import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ReceiptPage } from '../receipt/receipt';

@Component({
  selector: 'page-receipts',
  templateUrl: 'receipts.html'
})

export class ReceiptsPage {

  public static receipts;
  receiptsPub;

  constructor(public navCtrl: NavController) {
    if (localStorage.getItem("receipts")) {
      ReceiptsPage.receipts = JSON.parse(localStorage.getItem("receipts"));
    }
    console.log(ReceiptsPage.receipts);
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
    ReceiptsPage.receipts.push(receipt);
    console.log(receipt);
    localStorage.setItem("receipts", JSON.stringify(ReceiptsPage.receipts));
  }

  receiptSelected(receipt) {
    this.navCtrl.push(ReceiptPage, {'items':receipt.items, 'company':receipt.company, 'price': receipt.totalPrice, 'bank': receipt.bank});
  }

}
