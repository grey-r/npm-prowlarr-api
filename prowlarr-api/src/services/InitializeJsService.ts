import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class InitializeJsService extends BaseService {
  /**
   * @returns any Success
   * @throws ApiError
   */
  public static getInitializeJs(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/initialize.js',
    });
  }
}
