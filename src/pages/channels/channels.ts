import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChatService} from "../../providers/chat/chat.service";
import {Observable} from "rxjs/Observable";
import {Channel} from "../../models/channel/channel.interface";

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channelList: Observable<Channel[]>;

  constructor(private chat: ChatService, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    // Get Channels
    this.getChannels();
  }

  getChannels() {
    this.channelList = this.chat.getChannelListRef();
  }

  showAddChannelDialog() {
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [
        {
          name: 'channelName'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName);
          }
        }
      ]
    }).present();
  }
}
