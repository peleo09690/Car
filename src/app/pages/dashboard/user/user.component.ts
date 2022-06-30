import { Component, OnInit } from '@angular/core';
import { ITableConfig, TextColumn } from '@common/models';
import { ApiPath } from '@core/config/api-path';
import { HttpService } from '@core/services/http/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public config: ITableConfig = {
    showMore: true,
    columnDefinition: [
      new TextColumn('customer_id_format', 'Customer Id Format', 20, true, 'center', false, false, true),
      new TextColumn('customer_first_name', 'Fist Name', 20, true, 'center', false, false, true),
      new TextColumn('customer_last_name', 'Last Name', 20, true, 'center', false, false, true),
      new TextColumn('customer_name', 'Customer Name', 20, true, 'center', false, false, true),
      new TextColumn('mail', 'Mail', 20, true, 'center', false, false, true),
      new TextColumn('phone_number', 'Phone', 20, true, 'center', false, false, true)
    ]
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public datasource: any = [];
  isOpen: boolean = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataPopup: any;
  headerContent: string = 'Edit User';
  constructor(
    private http: HttpService
  ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.callTestApi();
  }
  callTestApi(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.http.get(ApiPath.GET_CUSTOMER_INFO).subscribe((x: any) => {
      if (x) {
        this.datasource = x?.data;
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eventHandlerClose(event: any): void {
    console.log(event);
    this.isOpen = false;

  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handelDbClick(event: any): void {
    this.isOpen = true;
    console.log(event);
    this.dataPopup = { ...event };
  }
}
