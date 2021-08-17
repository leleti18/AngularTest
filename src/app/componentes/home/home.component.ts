import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class HomeComponent implements OnInit {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {}

  open(content: any) {
    this.modalService.open(content);
  }

  edit(contentEdit: any) {
    this.modalService.open(contentEdit);
  }

  delete(contentDelete: any) {
    this.modalService.open(contentDelete);
  }
}
