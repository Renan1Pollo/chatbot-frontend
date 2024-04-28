import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { Message } from '../../types/message.type';
import { ChatDialogComponent } from "../../components/chat-dialog/chat-dialog.component";
import { MessageService } from '../../services/message.service';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  providers: [
    MessageService
  ]
})
export class ChatComponent {
  messages: Message[] = JSON.parse(localStorage.getItem("messages") ?? "[]");

  constructor(private service: MessageService) { }
  sendSuggestedQuestion(question: string): void {
    this.messages.push({
      type: 'request',
      message: question
    });
    this.sendMessage(question)
  }

  updateLocalStorage(): void {
    localStorage.setItem("messages", JSON.stringify(this.messages))
    this.updateLocalStorage();
  }

  sendMessage(message: string) {
    this.service.send(message).subscribe({
      next: (body) => {
        this.messages.push({
          type: "response",
          message: body.response
        })
        this.updateLocalStorage();

      }
    })
  }

}
