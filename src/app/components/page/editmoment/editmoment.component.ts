import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/interface/moment';

@Component({
  selector: 'app-editmoment',
  templateUrl: './editmoment.component.html',
  styleUrls: ['./editmoment.component.css'],
})
export class EditmomentComponent implements OnInit {
  moment!: Moment;
  text: string = 'Salvar';
  constructor(
    private route: ActivatedRoute,
    private momentService: MomentService
  ) {}

  ngOnInit(): void {
    this.getMoment();
  }

  getMoment() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService.getMomentId(id).subscribe((momentt) => {
      this.moment = momentt.data;
    });
  }
}
