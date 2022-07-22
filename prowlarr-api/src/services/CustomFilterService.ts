import type {CustomFilterResource} from '../models/CustomFilterResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class CustomFilterService extends BaseService {
  /**
   * @param id
   * @returns CustomFilterResource Success
   * @throws ApiError
   */
  public static getCustomfilter(
    id: number
  ): CancelablePromise<CustomFilterResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/customfilter/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns CustomFilterResource Success
   * @throws ApiError
   */
  public static putCustomfilter(
    id: string,
    requestBody?: CustomFilterResource
  ): CancelablePromise<CustomFilterResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/customfilter/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public static deleteCustomfilter(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/customfilter/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns CustomFilterResource Success
   * @throws ApiError
   */
  public static getCustomfilter1(): CancelablePromise<
    Array<CustomFilterResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/customfilter',
    });
  }

  /**
   * @param requestBody
   * @returns CustomFilterResource Success
   * @throws ApiError
   */
  public static postCustomfilter(
    requestBody?: CustomFilterResource
  ): CancelablePromise<CustomFilterResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/customfilter',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
