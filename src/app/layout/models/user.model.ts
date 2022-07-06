import { HttpResponse } from "@core/models";

export interface UserModelResponse extends HttpResponse {
  data: UserDetailModel,
}
export interface UserDetailModel {
  userId: number;
  userIdFormat: string;
  userName: string;
  mail: string;
  phoneNumber: string;
  requireChangePass: string;
  createBy: null
  delFlg: string;
  exKey: number;
  lastChangepassTime?: string
  lastLoginTime?: string
  lockUser: string;
  counter: number;
  roles: UserRole[];
}

export interface UserRole {
  role: string;
}
