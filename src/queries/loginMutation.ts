export interface Args {
  email: string;
  password: string;
}

export interface Resp {
  errors: [{ message: string }];
  data: {
    login: {
      jwt: string;
    };
  };
}

export const Login = ({ email, password }: Args) =>
  JSON.stringify({
    query: /* GraphQL */ `
      mutation Login($data: UsersPermissionsLoginInput!) {
        login(input: $data) {
          jwt
        }
      }
    `,
    variables: {
      data: {
        identifier: email,
        password,
      },
    },
  });
