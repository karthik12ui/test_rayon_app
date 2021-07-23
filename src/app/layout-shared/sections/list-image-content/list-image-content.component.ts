import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-image-content',
  templateUrl: './list-image-content.component.html',
  styleUrls: ['./list-image-content.component.scss']
})
export class ListImageContentComponent implements OnInit {
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
