import 'dotenv/config';
import {HealthService} from '../../src/prowlarr-api';

test('Health GET test', async () => {
  HealthService.configure(
    process.env.BASE_URL ?? '',
    process.env.API_KEY ?? ''
  );
  expect(await HealthService.getHealth()).toBeTruthy();
});
