export interface Resp {
  errors: [{ message: string }];
  data: {
    me: {
      id: string;
      user: {
        email: string;
        name: string;
      };
    };
  };
}

export const Viewer = () =>
  JSON.stringify({
    query: /* GraphQL */ `
      query GetViewer {
        me {
          id
          user {
            email
            name
          }
        }
      }
    `,
  });
