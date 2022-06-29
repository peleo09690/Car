import { environment } from '@env/environment';
import { ApiPathConfig } from '.';
export class ApiPath {
  public static LOGIN = environment.API_SERVICE.concat(ApiPathConfig.auth.login);
}
