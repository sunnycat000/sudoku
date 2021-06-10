import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
  @Input() number: number;
  selected: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleSelect() {
    this.selected = !this.selected;
    // console.log(this.selected);
  }
}
