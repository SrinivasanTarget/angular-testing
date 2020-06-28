import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { createMockHandlers } from './mock-handlers';

const server = setupServer(...createMockHandlers(rest));

export { server, rest };
