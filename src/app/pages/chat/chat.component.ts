import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";

@Component({
    selector: 'app-chat',
    standalone: true,
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss',
    imports: [
        CommonModule,
        ArrowLeftComponent,
        MuseumComponent,
        ChatSuggestionsComponent,
        ChatDialogComponent
    ]
})
export class ChatComponent {
  messages: Message[] = [];

  sendSuggestedQuestion(question: string): void {
    this.messages.push({
      type: 'request',
      message: question
    });
  }

}
