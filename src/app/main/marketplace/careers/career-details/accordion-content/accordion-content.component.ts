import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.scss']
})
export class AccordionContentComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
