import { Component, OnInit } from '@angular/core';
import { RayonsoftServicesService } from '../rayonsoft-services.service';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  pageContent: any;
  constructor(public rayonsoftServicesService: RayonsoftServicesService) {
    this.pageContent = this.rayonsoftServicesService.pageContent.blockChain;
  }

  ngOnInit() {
  }

}
