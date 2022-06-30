import { environment } from '@env/environment';
import { ApiPathConfig } from '.';
export class ApiPath {
  public static LOGIN = environment.apiService.concat(ApiPathConfig.auth.login);
  public static USER_LIST = environment.apiService.concat(ApiPathConfig.user.listUser);
}
