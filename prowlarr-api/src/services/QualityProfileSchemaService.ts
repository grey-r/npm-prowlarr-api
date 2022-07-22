import type {AppProfileResource} from '../models/AppProfileResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class QualityProfileSchemaService extends BaseService {
  /**
   * @returns AppProfileResource Success
   * @throws ApiError
   */
  public static getAppProfileSchema(): CancelablePromise<AppProfileResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/appprofile/schema',
    });
  }
}
