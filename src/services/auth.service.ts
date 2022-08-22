import { api } from './api';
import * as LoginMutation from 'queries/loginMutation';
import * as RegisterMutation from 'queries/registerMutation';
import * as ViewerQuery from 'queries/viewerQuery';

/**
 * All API services related to authentication
 */

async function registerUser(args: RegisterMutation.Args) {
  try {
    const response = await api({ data: RegisterMutation.Register(args) });
    const data = response.data as RegisterMutation.Resp;
    return {
      user: data?.createUsersPermissionsUser?.data,
      errors: data?.errors,
    };
  } catch (err) {
    console.log('registerUser err:', err);
    return {
      user: null,
      errors: null,
    };
  }
}

async function loginUser(args: LoginMutation.Args) {
  try {
    const response = await api({ data: LoginMutation.Login(args) });
    const data = response.data as LoginMutation.Resp;
    return {
      jwt: data?.data?.login?.jwt,
      errors: data?.errors,
    };
  } catch (err) {
    console.log('loginUser, error:', err);
    return {
      jwt: null,
      // TODO: gotta fix it cause if client try to access errors[0].message will throw.. not good ;X
      errors: null,
    };
  }
}

async function getViewer() {
  try {
    const response = await api({ data: ViewerQuery.Viewer() });
    const data = response.data as ViewerQuery.Resp;
    return {
      me: data?.data?.me,
      errors: data?.errors,
    };
  } catch (err) {
    console.log('getViewer, err:', err);
    return {
      me: null,
      errors: null,
    };
  }
}

export { registerUser, loginUser, getViewer };
