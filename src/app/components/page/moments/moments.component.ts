import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/interface/moment';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css'],
})
export class MomentsComponent implements OnInit {
  allMoments: Moment[] = [];
  moments: Moment[] = [];

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.getAllMoments();
  }

  getAllMoments() {
    this.momentService.getAllMoments().subscribe((itens) => {
      const data = itens.data;

      data.forEach(
        (dado) =>
          (dado.created_at = new Date(dado.created_at!).toLocaleDateString(
            'pt-br'
          ))
      );

      this.allMoments = data;
      this.moments = data;
    });
  }
  changeValue(e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
  }
}
