import 'dotenv/config';
import ProwlarrAPI from '../../src/prowlarr-api';

test('Health GET test', async () => {
  const api = new ProwlarrAPI(
    process.env.BASE_URL ?? '',
    process.env.API_KEY ?? ''
  );
  expect(await api.getHealth()).toBeTruthy();
});
