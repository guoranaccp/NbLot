import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import { HomePage } from '../home/home';
import { RegisPage } from '../regis/regis';
import { ForgetpassPage } from '../forgetpass/forgetpass';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   loginButton() {
    this.navCtrl.push(HomePage);
  }
   regisButton() {
    this.navCtrl.push(RegisPage);
  }
   forgetpssButton() {
    this.navCtrl.push(ForgetpassPage);
  }

}
