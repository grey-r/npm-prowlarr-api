import type {IndexerResource} from '../models/IndexerResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerService extends BaseService {
  /**
   * @param id
   * @returns IndexerResource Success
   * @throws ApiError
   */
  public static getIndexer(id: number): CancelablePromise<IndexerResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns IndexerResource Success
   * @throws ApiError
   */
  public static putIndexer(
    id: string,
    requestBody?: IndexerResource
  ): CancelablePromise<IndexerResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/indexer/{id}',
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
  public static deleteIndexer(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/indexer/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns IndexerResource Success
   * @throws ApiError
   */
  public static getIndexer1(): CancelablePromise<Array<IndexerResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer',
    });
  }

  /**
   * @param requestBody
   * @returns IndexerResource Success
   * @throws ApiError
   */
  public static postIndexer(
    requestBody?: IndexerResource
  ): CancelablePromise<IndexerResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexer',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns IndexerResource Success
   * @throws ApiError
   */
  public static getIndexerSchema(): CancelablePromise<Array<IndexerResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer/schema',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerTest(
    requestBody?: IndexerResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexer/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerTestall(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexer/testall',
    });
  }

  /**
   * @param name
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerAction(
    name: string,
    requestBody?: IndexerResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexer/action/{name}',
      path: {
        name: name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
