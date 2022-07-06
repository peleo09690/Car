/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/naming-convention */
import { ISearchRequest } from '@core/models/http-request.model';
import { DataModel, HttpResponse, MetaModel } from '@core/models/http-response.model';

export interface UserModel {
  account_number: string,
  address_2?: string,
  address_3?: string,
  bank_code: string,
  basic_credit_limit: number,
  branch_code: string,
  credit_date_tmp: string,
  credit_limit: number,
  customer_first_name: string,
  customer_id: number
  customer_id_format: string,
  customer_last_name: string,
  customer_membership: string,
  customer_name: string,
  customer_type: string,
  exKey: number,
  existing_debt: number,
  exporter_code?: string,
  fax?: string,
  fax_2?: string,
  fax_3?: string,
  flg_account_lock: string,
  flg_auction: string,
  flg_special_response: string,
  flg_yamato?: string,
  invoice_address: string,
  invoice_language: string,
  join_date: Date,
  kuroneko_business_id: string,
  land_destination: string,
  land_destination_custom: string,
  mail: string,
  money_transfer_businessID: string,
  number_delinquencies: number,
  payments: string,
  phone_number: string,
  phone_number_2?: string,
  phone_number_3?: string,
  post_code_2?: string,
  post_code_3?: string,
  remarks?: string,
  representative_address: string,
  representative_post_code: string,
  sole_proprietor: string,
  supplier_name_kana: string,
  supplier_name_kanji: string,
  transfer_account_name?: string,
  trnsprtgrd: string,
  vehicle_address?: string,
  withdrawal_date: string,
}

export interface IUsersResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export class UsersLoginResponse implements IUsersResponse {
  public constructor(
    public access_token: string,
    public expires_in: number,
    public refresh_token: string,
    public scope: string,
    public token_type: string
  ) { }
}

export interface LoginRequest {
  email: string;
  password: string;
}


export interface RequestUser extends ISearchRequest {
  userName: string;
  flgAccountLock: boolean | null;
  flgAuction: boolean | null;
}

export class UsersResponse implements HttpResponse {
  public constructor(
    public data: DataModel,
    public errors: object[],
    public meta: MetaModel
  ) { }
}
