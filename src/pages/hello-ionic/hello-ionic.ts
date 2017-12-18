import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { TestPage} from '../test/test';


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {

  }


  load() {
  	this.navCtrl.push(TestPage, {
  	val: 'hello'
  	})

  }

}
