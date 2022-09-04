import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService } from '@auth/services/login.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit,AfterViewChecked {

  public constructor(
    private cdr: ChangeDetectorRef,
    private loginService: LoginService
  ) { }
  public ngOnInit(): void {
    this.loginService.isLoginAsync$.next(true);
  }
  public ngAfterViewChecked(): void {
    this.cdr.detectChanges();

  }

}
