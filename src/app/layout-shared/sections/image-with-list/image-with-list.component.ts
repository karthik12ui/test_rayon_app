import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-with-list',
  templateUrl: './image-with-list.component.html',
  styleUrls: ['./image-with-list.component.scss']
})
export class ImageWithListComponent implements OnInit {
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
