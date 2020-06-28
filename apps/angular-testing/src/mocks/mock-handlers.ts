export const createMockHandlers = (rest) => [
  rest.get('https://jsonplaceholder.typicode.com/albums', (req, res, ctx) => {
    return res(
      // Set custom status
      ctx.status(200),

      // Set headers
      ctx.set({ 'X-Header': 'Mocked value' }),

      // send JSON response body
      ctx.json({
        userId: 1,
        id: 1,
        title: 'tamil',
      })
    );
  }),
];
