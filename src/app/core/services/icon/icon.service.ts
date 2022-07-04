import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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
    const domain = (isPlatformServer(this.platformId)) ? 'http://localhost:4200/' : '';
    this.iconRegistry.addSvgIcon('plus', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/icon-svg/plus.svg'));
    this.iconRegistry.addSvgIcon('iconBntPlus', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-bnt-plus.svg'));
    this.iconRegistry.addSvgIcon('iconDeleteRed', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-delete-red.svg'));
    this.iconRegistry.addSvgIcon('iconPlusBlue', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-plus-blue.svg'));
    this.iconRegistry.addSvgIcon('iconPlusGray', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-plus-gray.svg'));
    this.iconRegistry.addSvgIcon('iconPlusWhite', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-plus-white.svg'));
    this.iconRegistry.addSvgIcon('iconWaningGreen', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-waning-green.svg'));
    this.iconRegistry.addSvgIcon('inconCalendar', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/incon-calendar.svg'));
    this.iconRegistry.addSvgIcon('iconLogin', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-login.svg'));
    this.iconRegistry.addSvgIcon('iconUserIp', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/user.svg'));
    this.iconRegistry.addSvgIcon('iconPasswordIp', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/lock.svg'));
    this.iconRegistry.addSvgIcon('iconShowPasswordIp', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/eye.svg'));
    this.iconRegistry.addSvgIcon('iconHiddenPasswordIp', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/eye-slash.svg'));
    this.iconRegistry.addSvgIcon('iconClose', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-close.svg'));
    this.iconRegistry.addSvgIcon('iconAngleRight', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-angle-right.svg'));
    this.iconRegistry.addSvgIcon('iconLogomenu', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/logo-menu.svg'));
    this.iconRegistry.addSvgIcon('iconUser', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-user.svg'));
    this.iconRegistry.addSvgIcon('iconLogout', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-logout.svg'));
    this.iconRegistry.addSvgIcon('buttonSeach', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/button-seach.svg'));
    this.iconRegistry.addSvgIcon('iconChangePassword', this.sanitizer.bypassSecurityTrustResourceUrl(domain + '/assets/images/icon/icon-change-password.svg'));
  }
}
