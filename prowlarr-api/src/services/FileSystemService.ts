import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class FileSystemService extends BaseService {
  /**
   * @param path
   * @param includeFiles
   * @param allowFoldersWithoutTrailingSlashes
   * @returns any Success
   * @throws ApiError
   */
  public static getFilesystem(
    path?: string,
    includeFiles = false,
    allowFoldersWithoutTrailingSlashes = false
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/filesystem',
      query: {
        path: path,
        includeFiles: includeFiles,
        allowFoldersWithoutTrailingSlashes: allowFoldersWithoutTrailingSlashes,
      },
    });
  }

  /**
   * @param path
   * @returns any Success
   * @throws ApiError
   */
  public static getFilesystemType(path?: string): CancelablePromise<any> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/filesystem/type',
      query: {
        path: path,
      },
    });
  }
}
