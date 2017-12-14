import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database-deprecated";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {Channel} from "../../models/channel/channel.interface";
import {ChannelMessage} from "../../models/channel/channel-message";

/*
  Generated class for the ChatService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatService {

  constructor(private database: AngularFireDatabase) {

  }

  addChannel(channelName: string) {
    this.database.list(`/channel-names/`).push({name: channelName});
  }

  getChannelListRef(): FirebaseListObservable<Channel[]> {
    return this.database.list(`/channel-names/`);
  }

  getChannelChatRef(channelKey: string) {
    return this.database.list(`/channels/${channelKey}`)
  }

  async sendChannelChatMessage(channelKey: string, message: ChannelMessage) {
    await this.database.list(`/channels/${channelKey}`).push(message);
  }

}
