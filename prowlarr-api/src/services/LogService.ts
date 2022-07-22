import type {LogResourcePagingResource} from '../models/LogResourcePagingResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class LogService extends BaseService {
  /**
   * @returns LogResourcePagingResource Success
   * @throws ApiError
   */
  public static getLog(): CancelablePromise<LogResourcePagingResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/log',
    });
  }
}
