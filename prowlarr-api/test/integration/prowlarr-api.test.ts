import 'dotenv/config';
import {HealthService} from '../../src/prowlarr-api';

HealthService.configure(process.env.BASE_URL ?? '', process.env.API_KEY ?? '');

test('Health GET test', async () => {
  const res = await HealthService.getHealth();
  expect(res).toBeTruthy();
});
