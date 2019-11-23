import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '.app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.css']
})
export class DetailModalComponent implements OnInit {
  
  @Input() fullDetails : any;
  
  constructor() { }

  ngOnInit(): void {}
  
}