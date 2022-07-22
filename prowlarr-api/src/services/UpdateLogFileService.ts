import type {LogFileResource} from '../models/LogFileResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class UpdateLogFileService extends BaseService {
  /**
   * @returns LogFileResource Success
   * @throws ApiError
   */
  public static getLogFileUpdate(): CancelablePromise<Array<LogFileResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/log/file/update',
    });
  }

  /**
   * @param filename
   * @returns any Success
   * @throws ApiError
   */
  public static getLogFileUpdate1(filename: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/log/file/update/{filename}',
      path: {
        filename: filename,
      },
    });
  }
}
