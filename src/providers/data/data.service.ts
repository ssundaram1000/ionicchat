import { Injectable } from '@angular/core';
import {User} from "firebase/app";
import {Profile} from "../../models/profile/profile.interface";
import {AngularFireDatabase, FirebaseObjectObservable} from "angularfire2/database-deprecated";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  profileObject: FirebaseObjectObservable<Profile>;

  constructor(private database: AngularFireDatabase) {

  }

  async saveProfile(user: User, profile: Profile) {
    this.profileObject = this.database.object(`/profiles/${user.uid}`);

    try {
      await this.profileObject.set(profile);
      return true;
    }
    catch (e) {
      console.error(e);
      return false;
    }

  }

}
