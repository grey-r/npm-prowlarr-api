import type {DevelopmentConfigResource} from '../models/DevelopmentConfigResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class DevelopmentConfigService extends BaseService {
  /**
   * @param id
   * @param requestBody
   * @returns DevelopmentConfigResource Success
   * @throws ApiError
   */
  public static putConfigDevelopment(
    id: string,
    requestBody?: DevelopmentConfigResource
  ): CancelablePromise<DevelopmentConfigResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/config/development/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id
   * @returns DevelopmentConfigResource Success
   * @throws ApiError
   */
  public static getConfigDevelopment(
    id: number
  ): CancelablePromise<DevelopmentConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/development/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns DevelopmentConfigResource Success
   * @throws ApiError
   */
  public static getConfigDevelopment1(): CancelablePromise<DevelopmentConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/development',
    });
  }
}
