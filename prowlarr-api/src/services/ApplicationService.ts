import type {ApplicationResource} from '../models/ApplicationResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class ApplicationService extends BaseService {
  /**
   * @param id
   * @returns ApplicationResource Success
   * @throws ApiError
   */
  public static getApplicationById(
    id: number
  ): CancelablePromise<ApplicationResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/applications/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns ApplicationResource Success
   * @throws ApiError
   */
  public static createApplication(
    id: string,
    requestBody?: ApplicationResource
  ): CancelablePromise<ApplicationResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/applications/{id}',
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
  public static deleteApplicationById(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/applications/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns ApplicationResource Success
   * @throws ApiError
   */
  public static getApplications(): CancelablePromise<
    Array<ApplicationResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/applications',
    });
  }

  /**
   * @param requestBody
   * @returns ApplicationResource Success
   * @throws ApiError
   */
  public static updateApplications(
    requestBody?: ApplicationResource
  ): CancelablePromise<ApplicationResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/applications',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns ApplicationResource Success
   * @throws ApiError
   */
  public static getApplicationSchema(): CancelablePromise<
    Array<ApplicationResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/applications/schema',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static testApplication(
    requestBody?: ApplicationResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/applications/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static testApplications(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/applications/testall',
    });
  }

  /**
   * @param name
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static doApplicationAction(
    name: string,
    requestBody?: ApplicationResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/applications/action/{name}',
      path: {
        name: name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
