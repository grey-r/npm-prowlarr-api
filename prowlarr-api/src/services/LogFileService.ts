import type {LogFileResource} from '../models/LogFileResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class LogFileService extends BaseService {
  /**
   * @returns LogFileResource Success
   * @throws ApiError
   */
  public static getLogFile(): CancelablePromise<Array<LogFileResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/log/file',
    });
  }

  /**
   * @param filename
   * @returns any Success
   * @throws ApiError
   */
  public static getLogFile1(filename: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/log/file/{filename}',
      path: {
        filename: filename,
      },
    });
  }
}
