import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public listInformation: Array<any> = [];
  public listAnswerQuestion: Array<any> = [];
  public listShared: Array<any> = [];
  public listReview: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}
