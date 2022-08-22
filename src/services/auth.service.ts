import { api } from './api';
import * as LoginMutation from 'queries/loginMutation';
import * as RegisterMutation from 'queries/registerMutation';
import * as ViewerQuery from 'queries/viewerQuery';

/**
 * All API services related to authentication
 */

async function registerUser(args: RegisterMutation.Args) {
  const response = await api({ data: RegisterMutation.Register(args) });
  const data = response.data as RegisterMutation.Resp;
  return {
    user: data?.createUsersPermissionsUser?.data,
    errors: data?.errors,
  };
}

async function loginUser(args: LoginMutation.Args) {
  const response = await api({ data: LoginMutation.Login(args) });
  const data = response.data as LoginMutation.Resp;
  return {
    jwt: data?.data?.login?.jwt,
    errors: data?.errors,
  };
}

async function getViewer() {
  const response = await api({ data: ViewerQuery.Viewer() });
  const data = response.data as ViewerQuery.Resp;
  return {
    me: data?.data?.me,
    errors: data?.errors,
  };
}

export { registerUser, loginUser, getViewer };
