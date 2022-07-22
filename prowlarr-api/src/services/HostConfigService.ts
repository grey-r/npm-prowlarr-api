import type {HostConfigResource} from '../models/HostConfigResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class HostConfigService extends BaseService {
  /**
   * @param id
   * @returns HostConfigResource Success
   * @throws ApiError
   */
  public static getConfigHost(
    id: number
  ): CancelablePromise<HostConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/host/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns HostConfigResource Success
   * @throws ApiError
   */
  public static putConfigHost(
    id: string,
    requestBody?: HostConfigResource
  ): CancelablePromise<HostConfigResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/config/host/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns HostConfigResource Success
   * @throws ApiError
   */
  public static getConfigHost1(): CancelablePromise<HostConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/host',
    });
  }
}
