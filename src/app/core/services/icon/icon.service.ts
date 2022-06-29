import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  public init(): void {
    const domain = (isPlatformServer(this.platformId)) ? environment.API_SERVICE : '';
  }
}
