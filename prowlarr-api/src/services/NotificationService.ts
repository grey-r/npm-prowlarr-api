import type {NotificationResource} from '../models/NotificationResource';

import type {CancelablePromise} from '../core/CancelablePromise';
import {BaseService} from './BaseService';
import {request as __request} from '../core/request';

export class NotificationService extends BaseService {
  /**
   * @param id
   * @returns NotificationResource Success
   * @throws ApiError
   */
  public static getNotification(
    id: number
  ): CancelablePromise<NotificationResource> {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/notification/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @param id
   * @param requestBody
   * @returns NotificationResource Success
   * @throws ApiError
   */
  public static putNotification(
    id: string,
    requestBody?: NotificationResource
  ): CancelablePromise<NotificationResource> {
    return __request(this.config, {
      method: 'PUT',
      url: '/api/v1/notification/{id}',
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @param id
   * @returns any Success
   * @throws ApiError
   */
  public static deleteNotification(id: number): CancelablePromise<any> {
    return __request(this.config, {
      method: 'DELETE',
      url: '/api/v1/notification/{id}',
      path: {
        id: id,
      },
    });
  }

  /**
   * @returns NotificationResource Success
   * @throws ApiError
   */
  public static getNotification1(): CancelablePromise<
    Array<NotificationResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/notification',
    });
  }

  /**
   * @param requestBody
   * @returns NotificationResource Success
   * @throws ApiError
   */
  public static postNotification(
    requestBody?: NotificationResource
  ): CancelablePromise<NotificationResource> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/notification',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns NotificationResource Success
   * @throws ApiError
   */
  public static getNotificationSchema(): CancelablePromise<
    Array<NotificationResource>
  > {
    return __request(this.config, {
      method: 'GET',
      url: '/api/v1/notification/schema',
    });
  }

  /**
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postNotificationTest(
    requestBody?: NotificationResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/notification/test',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any Success
   * @throws ApiError
   */
  public static postNotificationTestall(): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/notification/testall',
    });
  }

  /**
   * @param name
   * @param requestBody
   * @returns any Success
   * @throws ApiError
   */
  public static postNotificationAction(
    name: string,
    requestBody?: NotificationResource
  ): CancelablePromise<any> {
    return __request(this.config, {
      method: 'POST',
      url: '/api/v1/notification/action/{name}',
      path: {
        name: name,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
