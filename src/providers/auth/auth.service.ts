import { Injectable } from '@angular/core';
import {BeepAccount} from "../../models/accounts/beepAccount.interface";
import {LoginResponse} from "../../models/login/login.response.interface";
import {AngularFireAuth} from "angularfire2/auth";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
  }

  getAuthenticatedUser() {
    return this.afAuth.authState;
  }

  async signInWithEmailAndPassword(account: BeepAccount) {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(account.email, account.password)
      };
      return result;

    }
    catch (e) {
      // console.error(e);
      const error: LoginResponse = {
        error: e
      }
      return error;
    }
  }

  async createUserWithEmailAndPassword(account: BeepAccount) {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      };
      return result;

    }
    catch (e) {
      // console.error(e);
      const error: LoginResponse = {
        error: e
      }
      return error;
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}
