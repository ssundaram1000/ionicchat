import {Component, EventEmitter, Output} from '@angular/core';
import {BeepAccount} from '../../models/accounts/beepAccount.interface'
import {AuthService} from "../../providers/auth/auth.service";
import {LoginResponse} from "../../models/login/login.response.interface";

/**
 * Generated class for the RegisterFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register-form',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {
  text: string;
  account = {} as BeepAccount;
  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private authService: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }
  async register() {
    try {
      const registerResponse = await this.authService.createUserWithEmailAndPassword(this.account);
      this.registerStatus.emit(registerResponse);
    }
    catch(e) {
      console.error(e);
      this.registerStatus.emit(e);
    }
  }

}
