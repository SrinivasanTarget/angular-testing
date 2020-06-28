import { pactWith } from 'jest-pact';
import * as path from 'path';
import { InteractionObject } from '@pact-foundation/pact';
import axios from 'axios';
import { integer, eachLike, string } from '@pact-foundation/pact/dsl/matchers';

pactWith({
  log: path.resolve(
    process.cwd(),
    'pacts',
    'logs',
    'mockserver-integration.log'
  ),
  cors: true,
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 3,
  logLevel: 'info',
  consumer: 'Album_Consumer',
  provider: 'Album_Provider',
}, async (provider) => {
  test('should be able to load albums', async () => {
    const url = `${provider.mockService.baseUrl}`;
    const requestPath = '/albums';
    const interaction: InteractionObject = {
      state: `An album exists`,
      uponReceiving: 'A get request to get an album',
      withRequest: {
        method: 'GET',
        path: requestPath,
      },
      willRespondWith: {
        status: 200,
        body: eachLike({
          userId: integer(1),
          id: integer(1),
          title: string('sarah'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    };

    await provider.addInteraction(interaction);

    const response = await axios.get(`${url}${requestPath}`);

    expect(response.status).toBe(200);
    expect(response.data[0].title).toBe('sarah');
  });
});
