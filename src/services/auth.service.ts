import axios, { AxiosError } from 'axios';
import { setCookie, deleteCookie, getCookie } from 'cookies-next';

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

interface LoginMutationArgs {
  email: string;
  password: string;
}

interface LoginMutationResp {
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

const API_URL = 'https://api-stage.peakstrength.app/graphql';

const api = axios.create({
  baseURL: API_URL,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  if (config.headers) {
    console.log('interceptor...');
    const token = await getToken();
    console.log('interceptor token', token);
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

const loginMutation = ({ email, password }: LoginMutationArgs) =>
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

const viewerQuery = () =>
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

    console.log('login resp:', data);

    const error = data?.errors && data.errors[0];

    if (error) {
      // Delete jwt from cookie
      deleteCookie('peakstrength-jwt');
    } else {
      // Save jwt to cookie
      setCookie('peakstrength-jwt', data.data.login.jwt);
    }

    return {
      jwt: data.data && data.data.login.jwt,
      error,
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    console.log('error:', error);
    return {
      error: {
        message: 'Something went wrong loging in',
      },
    };
  }
}

export async function getViewer() {
  try {
    const response = await api({ data: viewerQuery() });
    const data = response.data as ViewerQueryResp;

    console.log('Viewer resp:', data);

    return {
      jwt: data.data && data.data.login.jwt,
      error: data?.errors && data.errors[0],
    };
  } catch (err) {
    const error = err as Error | AxiosError;
    // console.log('error:', error);
    return {
      error: {
        message: 'Something went wrong loging in',
      },
    };
  }
}
