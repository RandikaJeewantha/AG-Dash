import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: '.app-list-modal',
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent implements OnInit {

  fullDetail: any;

  constructor() { }

  ngOnInit() { }

  @Input() listDetails: any;

  FullDetails(Details) {
    this.fullDetail = Details;
  }

}
