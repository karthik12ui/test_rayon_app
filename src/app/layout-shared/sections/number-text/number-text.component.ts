import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-text',
  templateUrl: './number-text.component.html',
  styleUrls: ['./number-text.component.scss']
})
export class NumberTextComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() subtitle: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  @Input() gridStrokeColor: string;
  @Input() lineStrokeColor: string;
  constructor() { }

  ngOnInit() {
  }

}
