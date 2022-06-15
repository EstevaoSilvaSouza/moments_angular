import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from '../../../../interface/moment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() insertMoment: EventEmitter<Moment> = new EventEmitter();

  @Input() text!: string;
  @Input() momentData: Moment | null = null;

  name!: string;
  momentForm!: FormGroup;

  constructor(private serviceMoment: MomentService) {}

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onChangefile(event: any) {
    const file: File = event.target.files[0];
    this.momentForm.patchValue({ image: file });
  }
  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData ? this.momentData.title : '', [
        Validators.required,
      ]),
      description: new FormControl(
        this.momentData ? this.momentData.description : '',
        [Validators.required]
      ),
      image: new FormControl(''),
    });
  }

  submited(): void {
    if (this.momentForm.invalid) {
      return;
    }
    this.insertMoment.emit(this.momentForm.value);
  }
}
