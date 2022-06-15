import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  faTimes = faTimes;
  time: number = 5;
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.setTime();
  }

  setTime = () => {
    setInterval(() => {
      this.time = this.time - 1;
    }, 1000);
  };
}
