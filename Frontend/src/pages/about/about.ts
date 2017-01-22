import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  posts: any = [];

    
  constructor(public navCtrl: NavController) {

  }
  
  addToList(note) {
      this.posts.push(note);
  }
  
    deleteNote(note){
        let index = this.posts.indexOf(note);
        this.posts.splice(index, 1);
    }
  

}
