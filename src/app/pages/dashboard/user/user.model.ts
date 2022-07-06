import { DataModel, HttpResponse, MetaModel } from "@core/models";
import { ISearchRequest } from "@core/models/http-request.model";

export class UsersResponse implements HttpResponse {
  public constructor(
    public data: DataModel,
    public errors: object[],
    public meta: MetaModel
  ) { }
}

export interface RequestUser extends ISearchRequest {
  userName: string | null;
}
