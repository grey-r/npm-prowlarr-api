import type {IndexerStatusResource} from '../models/IndexerStatusResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerStatusService extends BaseService {
  /**
   * @param id
   * @returns IndexerStatusResource Success
   * @throws ApiError
   */
  public static getIndexerstatus(
    id: number
  ): CancelablePromise<IndexerStatusResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerstatus/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns IndexerStatusResource Success
   * @throws ApiError
   */
  public static getIndexerstatus1(): CancelablePromise<
    Array<IndexerStatusResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerstatus',
    });
  }
}
