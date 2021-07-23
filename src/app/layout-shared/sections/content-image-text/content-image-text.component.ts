import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-image-text',
  templateUrl: './content-image-text.component.html',
  styleUrls: ['./content-image-text.component.scss']
})
export class ContentImageTextComponent implements OnInit {
  @Input() bgStylePatten: string;
  @Input() content: string;
  @Input() content2: string;
  @Input() sectionTitle: string;
  @Input() subtitle: string;
  @Input() imageContent: string;
  @Input() imagePostion: string;
  @Input() bgColor: string;
  @Input() textColor: string;
  constructor() { }

  ngOnInit() {
  }

}
