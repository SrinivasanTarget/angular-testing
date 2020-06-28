export const createMockHandlers = (rest) => [
  rest.get('https://api.github.com/users/:user', (req, res, ctx) => {
    // Access request's params
    const { user } = req.params;

    return res(
      // Set custom status
      ctx.status(200),

      // Set headers
      ctx.set({ 'X-Header': 'Mocked value' }),

      // send JSON response body
      ctx.json({
        name: `mocked-${user}`,
        bio: 'mocked-bio',
      })
    );
  }),
];
