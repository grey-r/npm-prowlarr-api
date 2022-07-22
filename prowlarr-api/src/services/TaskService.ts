import type {TaskResource} from '../models/TaskResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class TaskService extends BaseService {
  /**
   * @returns TaskResource Success
   * @throws ApiError
   */
  public static getSystemTask(): CancelablePromise<Array<TaskResource>> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/task',
    });
  }

  /**
   * @param id
   * @returns TaskResource Success
   * @throws ApiError
   */
  public static getSystemTask1(id: number): CancelablePromise<TaskResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/system/task/{id}',
      path: {
        id: id,
      },
    });
  }
}
