import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-content',
  templateUrl: './fixed-content.component.html',
  styleUrls: ['./fixed-content.component.scss']
})
export class FixedContentComponent implements OnInit {
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
