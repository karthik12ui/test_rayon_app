import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content-image',
  templateUrl: './left-content-image.component.html',
  styleUrls: ['./left-content-image.component.scss']
})
export class LeftContentImageComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() sectionTitle: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() imagePostion: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  constructor() { }

  ngOnInit() {
  }

}
