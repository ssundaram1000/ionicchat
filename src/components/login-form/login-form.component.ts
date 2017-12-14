import {Component, EventEmitter, Output} from '@angular/core';
import {NavController} from "ionic-angular";
import {BeepAccount} from "../../models/accounts/beepAccount.interface";
import {LoginResponse} from "../../models/login/login.response.interface";
import {AuthService} from "../../providers/auth/auth.service";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  text: string;
  account = { email: 'test10@gmail.com', password: 'test10' } as BeepAccount;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService, private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  navigateToRegisterPage() {
      this.navCtrl.push('RegisterPage')
        .then(response => {response => console.log('Response ' + response)},
          error => console.log('Error ' + error))
        .catch(exception => { console.log('Exception ' + exception)});
  }

  async login() {
    const loginResponse = await this.authService.signInWithEmailAndPassword(this.account);
    this.loginStatus.emit(loginResponse);
    // try {
    //   const result: LoginResponse = {
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    //   };
    //   this.loginStatus.emit(result);
    //
    // }
    // catch (e) {
    //   // console.error(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }
    //   this.loginStatus.emit(error);
    // }
  }

}
