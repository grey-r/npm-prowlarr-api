import type {CommandResource} from '../models/CommandResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class CommandService extends BaseService {
  /**
   * @param id
   * @returns CommandResource Success
   * @throws ApiError
   */
  public static getCommand(id: number): CancelablePromise<CommandResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/command/{id}',
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
  public static deleteCommand(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/command/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param requestBody
   * @returns CommandResource Success
   * @throws ApiError
   */
  public static postCommand(
    requestBody?: CommandResource
  ): CancelablePromise<CommandResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/command',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns CommandResource Success
   * @throws ApiError
   */
  public static getCommand1(): CancelablePromise<Array<CommandResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/command',
    });
  }
}
