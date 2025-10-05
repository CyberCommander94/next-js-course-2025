'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { signupAction } from '../../server-actions/signup';
import { LoginState } from '@/types/auth';
import Link from 'next/link';

const Signup: FC = () => {
  const [{ redirectTo }, formAction, isPending] = useActionState<LoginState, FormData>(
    signupAction,
    {
      error: '',
    },
  );

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full lg:w-9/12 py-4 px-6 lg:px-0 gap-4">
        <section className="flex justify-between items-center w-full my-2 font-light">
          <div className="text-2xl md:text-3-xl font-light uppercase tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text">
            <Link href="/">Tennis Store</Link>
          </div>
        </section>
        <section className="w-full h-full flex flex-col items-center justify-center max-w-[500px]">
          <p className="font-light text-2xl text-center mb-10">Регистрация пользователя</p>
          <form
            action={formAction}
            className="w-full flex flex-col items-center justify-center gap-2 pb-20"
          >
            <Input type="text" name="login" className="w-full" placeholder="Логин" required />
            <Input
              type="password"
              name="password"
              className="w-full"
              placeholder="Пароль"
              required
            />
            <Button className="w-full mt-4" disabled={isPending}>
              <UserPlus />
              Зарегистрироваться
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
