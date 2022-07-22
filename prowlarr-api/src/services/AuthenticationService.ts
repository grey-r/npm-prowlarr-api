import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class AuthenticationService extends BaseService {
  /**
   * @param returnUrl
   * @param formData
   * @returns any Success
   * @throws ApiError
   */
  public static postLogin(
    returnUrl?: string,
    formData?: {
      Username?: string;
      Password?: string;
      RememberMe?: string;
    }
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/login',
      query: {
        returnUrl: returnUrl,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getLogout(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/logout',
    });
  }
}
