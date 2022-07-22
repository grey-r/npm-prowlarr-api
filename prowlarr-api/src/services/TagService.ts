import type {TagResource} from '../models/TagResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class TagService extends BaseService {
  /**
   * @param id
   * @returns TagResource Success
   * @throws ApiError
   */
  public static getTag(id: number): CancelablePromise<TagResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/tag/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns TagResource Success
   * @throws ApiError
   */
  public static putTag(
    id: string,
    requestBody?: TagResource
  ): CancelablePromise<TagResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/tag/{id}',
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
  public static deleteTag(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/tag/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns TagResource Success
   * @throws ApiError
   */
  public static getTag1(): CancelablePromise<Array<TagResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/tag',
    });
  }

  /**
   * @param requestBody
   * @returns TagResource Success
   * @throws ApiError
   */
  public static postTag(
    requestBody?: TagResource
  ): CancelablePromise<TagResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/tag',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
