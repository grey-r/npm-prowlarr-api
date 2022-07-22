import type {DownloadClientResource} from '../models/DownloadClientResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class DownloadClientService extends BaseService {
  /**
   * @param id
   * @returns DownloadClientResource Success
   * @throws ApiError
   */
  public static getDownloadClient(
    id: number
  ): CancelablePromise<DownloadClientResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/downloadclient/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns DownloadClientResource Success
   * @throws ApiError
   */
  public static putDownloadClient(
    id: string,
    requestBody?: DownloadClientResource
  ): CancelablePromise<DownloadClientResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/downloadclient/{id}',
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
  public static deleteDownloadClient(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/downloadclient/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns DownloadClientResource Success
   * @throws ApiError
   */
  public static getDownloadClient1(): CancelablePromise<
    Array<DownloadClientResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/downloadclient',
    });
  }

  /**
   * @param requestBody
   * @returns DownloadClientResource Success
   * @throws ApiError
   */
  public static postDownloadClient(
    requestBody?: DownloadClientResource
  ): CancelablePromise<DownloadClientResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/downloadclient',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns DownloadClientResource Success
   * @throws ApiError
   */
  public static getDownloadClientSchema(): CancelablePromise<
    Array<DownloadClientResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/downloadclient/schema',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postDownloadClientTest(
    requestBody?: DownloadClientResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/downloadclient/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postDownloadClientTestall(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/downloadclient/testall',
    });
  }

  /**
   * @param name
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postDownloadClientAction(
    name: string,
    requestBody?: DownloadClientResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/downloadclient/action/{name}',
      path: {
        name: name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
