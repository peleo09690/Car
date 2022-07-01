import { environment } from '@env/environment';
import { ApiPathConfig } from '.';
export class ApiPath {
  public static LOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.login);
  public static USERLOGIN = environment.API_AUTH.concat(ApiPathConfig.auth.detailUser);
  public static CREATEANDUPDATEUSER = environment.API_AUTH.concat(ApiPathConfig.service.createAndUpdateUser);
  public static GET_CUSTOMER_INFO = environment.API_SERVICE.concat(ApiPathConfig.service.getUserInfor);
  public static USER_LIST = environment.apiService.concat(ApiPathConfig.user.listUser);
}
