import type {HealthResource} from '../models/HealthResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class HealthService extends BaseService {
  /**
   * @param id
   * @returns HealthResource Success
   * @throws ApiError
   */
  public static getHealth(id?: number): CancelablePromise<HealthResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/health/' + (id !== undefined ? '{id}' : ''),
      path: id !== undefined ? {id: id} : undefined,
    });
  }
}
