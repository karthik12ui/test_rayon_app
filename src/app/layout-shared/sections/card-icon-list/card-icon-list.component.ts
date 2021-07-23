import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-icon-list',
  templateUrl: './card-icon-list.component.html',
  styleUrls: ['./card-icon-list.component.scss']
})
export class CardIconListComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() subtitle: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  constructor() { }

  ngOnInit() {
  }

}
