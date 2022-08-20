import axios, { AxiosError } from 'axios';

interface RegisterMutationArgs {
  name: string;
  email: string;
  password: string;
}

interface RegisterMutationResp {
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

export interface LoginMutationArgs {
  email: string;
  password: string;
}

export interface LoginMutationResp {
  errors: [{ message: string }];
  data: {
    login: {
      jwt: string;
    };
  };
}

interface ViewerQueryResp {
  errors: [{ message: string }];
  data: any;
}

export const api = axios.create({
  baseURL: process.env.API_URL,
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
});

const registerMutation = ({ email, password, name }: RegisterMutationArgs) =>
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

export const loginMutation = ({ email, password }: LoginMutationArgs) =>
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

export const viewerQuery = () =>
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

export async function registerUser(args: RegisterMutationArgs) {
  try {
    const response = await api({ data: registerMutation(args) });
    const data = response.data as RegisterMutationResp;
    console.log(data);
    return {
      user: data.createUsersPermissionsUser && data.createUsersPermissionsUser.data,
      error: data.errors && data.errors[0],
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.log('error:', error);
    return {
      error: {
        message: 'Something went wrong registering',
      },
    };
  }
}

export async function loginUser(args: LoginMutationArgs) {
  try {
    const response = await api({ data: loginMutation(args) });
    const data = response.data as LoginMutationResp;
    return {
      jwt: data.data && data.data.login.jwt,
      errors: data?.errors && data.errors,
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.log('loginUser, error:', error);
    return { error: { message: 'Something went wrong loging in' } };
  }
}

export async function getViewer() {
  try {
    const response = await api({ data: viewerQuery() });
    const data = response.data as ViewerQueryResp;
    return {
      me: data.data && data.data.me,
      errors: data?.errors && data.errors,
    };
  } catch (err) {
    return { error: { message: 'Something went wrong loging in' } };
  }
}
