import { DataModel, HttpResponse, MetaModel } from "@core/models";

export class UsersResponse implements HttpResponse {
  constructor(
    public data: DataModel,
    public errors: object[],
    public meta: MetaModel
  ) { }
}
