import { Component, OnInit } from '@angular/core';
import { IconService } from './core/services/icon/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Common-FE';
  constructor(
    private icon: IconService
  ) { }
  ngOnInit(): void {
    this.icon.init();
  }
}
