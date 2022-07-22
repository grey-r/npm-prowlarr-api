import type {TagDetailsResource} from '../models/TagDetailsResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class TagDetailsService extends BaseService {
  /**
   * @param id
   * @returns TagDetailsResource Success
   * @throws ApiError
   */
  public static getTagDetail(
    id: number
  ): CancelablePromise<TagDetailsResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/tag/detail/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns TagDetailsResource Success
   * @throws ApiError
   */
  public static getTagDetail1(): CancelablePromise<Array<TagDetailsResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/tag/detail',
    });
  }
}
