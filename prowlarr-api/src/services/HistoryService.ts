import type {HistoryEventType} from '../models/HistoryEventType';
import type {HistoryResource} from '../models/HistoryResource';
import type {HistoryResourcePagingResource} from '../models/HistoryResourcePagingResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class HistoryService extends BaseService {
  /**
   * @returns HistoryResourcePagingResource Success
   * @throws ApiError
   */
  public static getHistory(): CancelablePromise<HistoryResourcePagingResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/history',
    });
  }

  /**
   * @param date
   * @param eventType
   * @returns HistoryResource Success
   * @throws ApiError
   */
  public static getHistorySince(
    date?: string,
    eventType?: HistoryEventType
  ): CancelablePromise<Array<HistoryResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/history/since',
      query: {
        date: date,
        eventType: eventType,
      },
    });
  }

  /**
   * @param indexerId
   * @param eventType
   * @returns HistoryResource Success
   * @throws ApiError
   */
  public static getHistoryIndexer(
    indexerId?: number,
    eventType?: HistoryEventType
  ): CancelablePromise<Array<HistoryResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/history/indexer',
      query: {
        indexerId: indexerId,
        eventType: eventType,
      },
    });
  }
}
