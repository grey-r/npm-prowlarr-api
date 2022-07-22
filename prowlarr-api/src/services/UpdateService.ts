import type {UpdateResource} from '../models/UpdateResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class UpdateService extends BaseService {
  /**
   * @returns UpdateResource Success
   * @throws ApiError
   */
  public static getUpdate(): CancelablePromise<Array<UpdateResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/update',
    });
  }
}
