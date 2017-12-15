import {Component, OnInit} from '@angular/core';
import {DataService} from "../../providers/data/data.service";
import {Profile} from "../../models/profile/profile.interface";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the OnlineUsersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-online-users',
  templateUrl: 'online-users.component.html'
})
export class OnlineUsersComponent implements OnInit {

  userList: FirebaseListObservable<Profile[]>;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline() {
    this.data.getAuthenticatedUserProfile().subscribe(profile => {
      this.data.setUserOnline(profile);
    });
  }

  getOnlineUsers() {
    this.userList = this.data.getOnlineUsers();
  }

}
