import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class StaticResourceService extends BaseService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getLogin(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/login',
    });
  }

  /**
   * @param path
   * @returns any Success
   * @throws ApiError
   */
  public static getContent(path: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/content/{path}',
      path: {
        path: path,
      },
    });
  }

  /**
   * @param path
   * @returns any Success
   * @throws ApiError
   */
  public static get(path: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/',
      path: {
        path: path,
      },
    });
  }

  /**
   * @param path
   * @returns any Success
   * @throws ApiError
   */
  public static get1(path: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/{path}',
      path: {
        path: path,
      },
    });
  }
}
