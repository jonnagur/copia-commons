import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() show: boolean;
  @Input() error: boolean;
  @Input() spacing: boolean;
  @Input() small: boolean;

  constructor() {
    this.show = true;
    this.spacing = true;
    this.error = false;
    this.small = false;
  }

  ngOnInit(): void {
  }

}
