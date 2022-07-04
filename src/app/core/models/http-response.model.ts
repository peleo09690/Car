/* eslint-disable @typescript-eslint/no-explicit-any */

export interface MetaModel {
  code: string;
  field: string | null;
  message: string;
}

export interface DataModel {
  length: number;
  currentPage: number,
  noRecordInPage: number,
  results: any,
  totalPage: number,
  totalRecords: number,
}

export interface HttpResponse {
  data: DataModel;
  errors: object[];
  meta: MetaModel;
}
