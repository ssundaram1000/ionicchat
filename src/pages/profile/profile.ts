import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Profile} from "../../models/profile/profile.interface";
import {AuthService} from "../../providers/auth/auth.service";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  navigateToEditProfilePage() {
    this.navCtrl.push('EditProfilePage', {existingProfile: this.existingProfile})
      .then(response => {response => console.log('Response ' + response)},
        error => console.log('Error ' + error))
      .catch(exception => { console.log('Exception ' + exception)});
  }

  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }

  constructor(private auth: AuthService, private navCtrl: NavController, private navParams: NavParams) {
  }

  signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage');
  }

}
