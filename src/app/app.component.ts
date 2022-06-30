import { Component, OnInit } from '@angular/core';
import { IconService } from './core/services/icon/icon.service';
import { LocalizationService } from './core/services/localization/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Common-FE';

  constructor(
    private icon: IconService,
    private localizationService: LocalizationService
  ) { }

  ngOnInit(): void {
    this.icon.init();
    this.localizationService.init();
  }
}
