import type {IndexerCategory} from '../models/IndexerCategory';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class IndexerDefaultCategoriesService extends BaseService {
  /**
   * @returns IndexerCategory Success
   * @throws ApiError
   */
  public static getIndexerCategories(): CancelablePromise<
    Array<IndexerCategory>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/indexer/categories',
    });
  }
}
