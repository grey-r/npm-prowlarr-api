import type {BackupResource} from '../models/BackupResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class BackupService extends BaseService {
  /**
   * @returns BackupResource Success
   * @throws ApiError
   */
  public static getSystemBackup(): CancelablePromise<Array<BackupResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/backup',
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public static deleteSystemBackup(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/system/backup/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public static postSystemBackupRestore(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/system/backup/restore/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postSystemBackupRestoreUpload(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/system/backup/restore/upload',
    });
  }
}
