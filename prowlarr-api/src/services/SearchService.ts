import type {ReleaseResource} from '../models/ReleaseResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class SearchService extends BaseService {
  /**
   * @param id
   * @returns ReleaseResource Success
   * @throws ApiError
   */
  public static getSearch(id: number): CancelablePromise<ReleaseResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/search/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param requestBody
   * @returns ReleaseResource Success
   * @throws ApiError
   */
  public static postSearch(
    requestBody?: ReleaseResource
  ): CancelablePromise<ReleaseResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/search',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param query
   * @param type
   * @param indexerIds
   * @param categories
   * @param limit
   * @param offset
   * @returns ReleaseResource Success
   * @throws ApiError
   */
  public static getSearch1(
    query?: string,
    type?: string,
    indexerIds?: Array<number>,
    categories?: Array<number>,
    limit?: number,
    offset?: number
  ): CancelablePromise<Array<ReleaseResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/search',
      query: {
        Query: query,
        Type: type,
        IndexerIds: indexerIds,
        Categories: categories,
        Limit: limit,
        Offset: offset,
      },
    });
  }

  /**
   * @param requestBody
   * @returns ReleaseResource Success
   * @throws ApiError
   */
  public static postSearchBulk(
    requestBody?: Array<ReleaseResource>
  ): CancelablePromise<ReleaseResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/search/bulk',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
