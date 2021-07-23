import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-our',
  templateUrl: './join-our.component.html',
  styleUrls: ['./join-our.component.scss']
})
export class JoinOurComponent implements OnInit {
  @Input() bgStylePatten: string;
  constructor() { }

  ngOnInit() {
  }

}
