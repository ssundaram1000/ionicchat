import {Component, EventEmitter, Output} from '@angular/core';
import {DataService} from "../../providers/data/data.service";
import {Profile} from "../../models/profile/profile.interface";

/**
 * Generated class for the ProfileSearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-profile-search',
  templateUrl: 'profile-search.component.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: Profile[];

  // We create this output so that the page which uses this component can handle the event and receive the selected profile.
  @Output()selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  searchUser(query: string) {
    const trimmedQuery = query.trim();

    if (trimmedQuery == query) {
      this.data.searchUser(query).subscribe(profiles => {
        this.profileList = profiles;
      })
    }
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

}
