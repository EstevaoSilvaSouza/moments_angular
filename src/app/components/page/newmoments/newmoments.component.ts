import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/interface/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newmoments',
  templateUrl: './newmoments.component.html',
  styleUrls: ['./newmoments.component.css'],
})
export class NewmomentsComponent implements OnInit {
  text = 'Enviar';
  constructor(
    private momentService: MomentService,
    private messageService: MessageService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  async createMoment(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    if (moment.image) {
      formData.append('image', moment.image);
    }

    console.log(moment);
    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add('Momento cadastrado com sucesso!!');

    setTimeout(() => {
      this.route.navigate(['/']);
    }, 3100);
  }
}
