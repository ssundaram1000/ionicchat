import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Profile} from "../../models/profile/profile.interface";
import {DataService} from "../../providers/data/data.service";
import {AuthService} from "../../providers/auth/auth.service";
import {Subscription} from "rxjs/Subscription";
import {User} from "firebase";

/**
 * Generated class for the EditProfileFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-edit-profile-form',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnInit, OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  @Input() profile: Profile;
  @Output() saveProfileResult: EventEmitter<Boolean>;


  constructor(private data: DataService, private auth: AuthService) {
    this.saveProfileResult = new EventEmitter<Boolean>();
    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User) => {
      this.authenticatedUser = user;
    })
  }

  async saveProfile() {
    this.profile.email = this.authenticatedUser.email;
    const result = await this.data.saveProfile(this.authenticatedUser, this.profile);
    this.saveProfileResult.emit(result);
  }

  ngOnInit() {
    if (!this.profile) {
      this.profile = {} as Profile;
    }
  }
  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }

}
