import type {AppProfileResource} from '../models/AppProfileResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class AppProfileService extends BaseService {
  /**
   * @param requestBody
   * @returns AppProfileResource Success
   * @throws ApiError
   */
  public static postAppProfile(
    requestBody?: AppProfileResource
  ): CancelablePromise<AppProfileResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/appprofile',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns AppProfileResource Success
   * @throws ApiError
   */
  public static getAppProfile(): CancelablePromise<Array<AppProfileResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/appprofile',
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public static deleteAppProfile(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/appprofile/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns AppProfileResource Success
   * @throws ApiError
   */
  public static putAppProfile(
    id: string,
    requestBody?: AppProfileResource
  ): CancelablePromise<AppProfileResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/appprofile/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id
   * @returns AppProfileResource Success
   * @throws ApiError
   */
  public static getAppProfile1(
    id: number
  ): CancelablePromise<AppProfileResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/appprofile/{id}',
      path: {
        id: id,
      },
      errors: {
        404: 'Not Found',
        500: 'Server Error',
      },
    });
  }
}
