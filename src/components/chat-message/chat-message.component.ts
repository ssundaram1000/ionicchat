import {Component, Input} from '@angular/core';
import {Message} from "../../models/messages/message.interface";

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.component.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message;
  @Input() chatIndex: Number;


  constructor() {
  }

}
