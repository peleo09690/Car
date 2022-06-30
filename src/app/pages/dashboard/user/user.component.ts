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
    columnDefinition: [
      new TextColumn('branch_code', 'Code', 20),
      new TextColumn('customer_first_name', 'Name', 30),
      new TextColumn('existing_debt', 'Existing Debt', 30),
      new TextColumn('phone_number', 'Phone Number', 30),
      new TextColumn('representative_address', 'Representative Address', 30),
      new TextColumn('representative_post_code', 'Representative Post Code', 30),
      new TextColumn('supplier_name_kana', 'Supplier Name Kana', 30)
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
