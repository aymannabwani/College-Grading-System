import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css'],
})
export class MarksComponent implements OnInit {
  grade: String = '';

  constructor() {}

  ngOnInit(): void {
    this.calculateGrade();
  }
  calculateGrade() {
    return (this.grade = 'A');
  }
}
