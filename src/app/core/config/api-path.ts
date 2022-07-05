import { environment } from '@env/environment';
import { ApiPathConfig } from '.';
export class ApiPath {
  public static LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.login);
  public static USERLOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.detailUser);
  public static CREATEANDUPDATEUSER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_CUSTOMER_INFO = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static DELETE_USER = environment.API_SERVICE.concat(ApiPathConfig.user.user);
  public static GET_DATA_DIALOG_COMMON = environment.API_SERVICE.concat(ApiPathConfig.service.dialogCommon);
  public static LOG_OUT = environment.API_AUTH.concat(ApiPathConfig.auth.logOut);
  // public static USER_LIST = environment.API_SERVICE.concat(ApiPathConfig.user.listUser);
  // public static USER_LIST = environment.apiService.concat(ApiPathConfig.user.listUser);
}
