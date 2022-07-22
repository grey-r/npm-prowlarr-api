import type {DownloadClientConfigResource} from '../models/DownloadClientConfigResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class DownloadClientConfigService extends BaseService {
  /**
   * @param id
   * @returns DownloadClientConfigResource Success
   * @throws ApiError
   */
  public static getConfigDownloadClient(
    id: number
  ): CancelablePromise<DownloadClientConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/downloadclient/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns DownloadClientConfigResource Success
   * @throws ApiError
   */
  public static putConfigDownloadClient(
    id: string,
    requestBody?: DownloadClientConfigResource
  ): CancelablePromise<DownloadClientConfigResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/config/downloadclient/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns DownloadClientConfigResource Success
   * @throws ApiError
   */
  public static getConfigDownloadClient1(): CancelablePromise<DownloadClientConfigResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/config/downloadclient',
    });
  }
}
