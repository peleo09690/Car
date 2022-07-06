/* eslint-disable @typescript-eslint/naming-convention */
export interface LoginModelResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
export interface LoginModelRequest {
  username: string;
  password: string;
}
