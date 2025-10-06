'use server';

import { userSignup } from '@/services/api/auth';
import { LoginState } from '@/types/auth';

export const signupAction = async (_: LoginState, formData: FormData) => {
  const login = formData.get('login')?.toString() || '';
  const password = formData.get('password')?.toString() || '';

  const result = await userSignup({ login, password });

  if (result.status !== 200) {
    return { error: 'invalid login or password' };
  }

  return { error: '', redirectTo: '/login' };
};
