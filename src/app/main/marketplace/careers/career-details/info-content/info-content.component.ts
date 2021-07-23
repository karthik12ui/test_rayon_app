import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss']
})
export class InfoContentComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
