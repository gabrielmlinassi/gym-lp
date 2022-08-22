export interface Args {
  name: string;
  email: string;
  password: string;
}

export interface Resp {
  errors: [{ message: string }];
  createUsersPermissionsUser: {
    data: {
      id: string;
      attributes: {
        email: string;
        name: string;
      };
    };
  };
}

export const Register = ({ email, password, name }: Args) =>
  JSON.stringify({
    query: /* GraphQL */ `
      mutation Register($data: UsersPermissionsUserInput!) {
        createUsersPermissionsUser(data: $data) {
          data {
            id
            attributes {
              email
              name
            }
          }
        }
      }
    `,
    variables: {
      data: { name, email, password, username: email },
    },
  });
