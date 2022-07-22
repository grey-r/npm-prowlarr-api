import type {IndexerProxyResource} from '../models/IndexerProxyResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerProxyService extends BaseService {
  /**
   * @param id
   * @returns IndexerProxyResource Success
   * @throws ApiError
   */
  public static getIndexerproxy(
    id: number
  ): CancelablePromise<IndexerProxyResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerproxy/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns IndexerProxyResource Success
   * @throws ApiError
   */
  public static putIndexerproxy(
    id: string,
    requestBody?: IndexerProxyResource
  ): CancelablePromise<IndexerProxyResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/indexerproxy/{id}',
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
  public static deleteIndexerproxy(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/indexerproxy/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns IndexerProxyResource Success
   * @throws ApiError
   */
  public static getIndexerproxy1(): CancelablePromise<
    Array<IndexerProxyResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerproxy',
    });
  }

  /**
   * @param requestBody
   * @returns IndexerProxyResource Success
   * @throws ApiError
   */
  public static postIndexerproxy(
    requestBody?: IndexerProxyResource
  ): CancelablePromise<IndexerProxyResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexerproxy',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns IndexerProxyResource Success
   * @throws ApiError
   */
  public static getIndexerproxySchema(): CancelablePromise<
    Array<IndexerProxyResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexerproxy/schema',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerproxyTest(
    requestBody?: IndexerProxyResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexerproxy/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerproxyTestall(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexerproxy/testall',
    });
  }

  /**
   * @param name
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postIndexerproxyAction(
    name: string,
    requestBody?: IndexerProxyResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/indexerproxy/action/{name}',
      path: {
        name: name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
