import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class SystemService extends BaseService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getSystemStatus(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/status',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getSystemRoutes(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/routes',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getSystemRoutesDuplicate(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/routes/duplicate',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postSystemShutdown(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/system/shutdown',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postSystemRestart(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/system/restart',
    });
  }
}
