import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmomentsComponent } from './newmoments.component';

describe('NewmomentsComponent', () => {
  let component: NewmomentsComponent;
  let fixture: ComponentFixture<NewmomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmomentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
