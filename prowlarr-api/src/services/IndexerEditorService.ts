import type {IndexerEditorResource} from '../models/IndexerEditorResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerEditorService extends BaseService {
  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static putIndexerEditor(
    requestBody?: IndexerEditorResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/indexer/editor',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static deleteIndexerEditor(
    requestBody?: IndexerEditorResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/indexer/editor',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
