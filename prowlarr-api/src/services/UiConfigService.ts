import type {UiConfigResource} from '../models/UiConfigResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class UiConfigService extends BaseService {
  /**
   * @param id
   * @param requestBody
   * @returns UiConfigResource Success
   * @throws ApiError
   */
  public static putConfigUi(
    id: string,
    requestBody?: UiConfigResource
  ): CancelablePromise<UiConfigResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/config/ui/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id
   * @returns UiConfigResource Success
   * @throws ApiError
   */
  public static getConfigUi(id: number): CancelablePromise<UiConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/ui/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns UiConfigResource Success
   * @throws ApiError
   */
  public static getConfigUi1(): CancelablePromise<UiConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/ui',
    });
  }
}
