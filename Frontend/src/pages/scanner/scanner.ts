import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController, Platform, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})
export class ScannerPage {

	public platform;
	public nav;

	shoppingItems: any = [];

  static get parameters() {
        return [[Platform], [NavController]];
    }
 
    constructor(platform, navController,public alertCtrl: AlertController) {
        this.platform = platform;
        this.nav = navController;
    }

  scan() {
        this.platform.ready().then(() => {
            BarcodeScanner.scan().then((result) => {

                console.log(result.text)                
 				this.shoppingItems.push(result.text);
        		

            }, (error) => {

                console.log(error)

            });
        });
    }

    editNote(note){
 
        let prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{
                name: 'title'
            }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.shoppingItems.indexOf(note);
 
                        if(index > -1){
                          this.shoppingItems[index] = data;
                        }
                    }
                }
            ]
        });
 
        this.nav.present(prompt);       
 
    }
 
    deleteNote(note){
 
        let index = this.shoppingItems.indexOf(note);
 
        if(index > -1){
            this.shoppingItems.splice(index, 1);
        }
    }


}
