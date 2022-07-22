import {ProwlarrAPI} from '../core/OpenAPI';
import {OpenAPIConfig} from '../prowlarr-api';

export abstract class BaseService extends ProwlarrAPI {
  protected static get config(): OpenAPIConfig {
    return ProwlarrAPI.config;
  }
}
