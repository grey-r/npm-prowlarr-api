import type {IndexerStatsResource} from '../models/IndexerStatsResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerStatsService extends BaseService {
  /**
   * @param startDate
   * @param endDate
   * @returns IndexerStatsResource Success
   * @throws ApiError
   */
  public static getIndexerstats(
    startDate?: string,
    endDate?: string
  ): CancelablePromise<IndexerStatsResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerstats',
      query: {
        startDate: startDate,
        endDate: endDate,
      },
    });
  }
}
