import type {LanguageResource} from '../models/LanguageResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class LanguageService extends BaseService {
  /**
   * @param id
   * @returns LanguageResource Success
   * @throws ApiError
   */
  public static getLanguage(id: number): CancelablePromise<LanguageResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/language/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns LanguageResource Success
   * @throws ApiError
   */
  public static getLanguage1(): CancelablePromise<Array<LanguageResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/language',
    });
  }
}
