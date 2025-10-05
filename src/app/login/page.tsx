'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useActionState, useEffect } from 'react';
import { loginAction } from '@/server-actions/login';
import { LoginState } from '@/types/auth';

const Login: FC = () => {
  const [{ error, redirectTo }, formAction, isPending] = useActionState<LoginState, FormData>(
    loginAction,
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
      <div className="flex flex-col items-center justify-center w-full h-full lg:w-9/12 py-4 px-6 lg:px-0">
        <section className="flex justify-between items-center w-full my-2 font-light">
          <div className="text-2xl md:text-3-xl font-light uppercase tracking-tighter bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 text-transparent bg-clip-text">
            <Link href="/">Tennis Store</Link>
          </div>
        </section>
        <section className="w-full h-full flex flex-col items-center justify-center max-w-[500px]">
          <p className="font-light text-2xl text-center mb-10">Вход в систему</p>
          <form
            action={formAction}
            className="w-full flex flex-col items-center justify-center gap-2"
          >
            <Input type="text" name="login" className="w-full" placeholder="Логин" required />
            <Input
              type="password"
              name="password"
              className="w-full"
              placeholder="Пароль"
              required
            />
            {error && <div>{error}</div>}
            <Button className="w-full mt-4" disabled={isPending}>
              <LogIn />
              Войти
            </Button>
            <div className="flex flex-col text-center gap-2 my-10 w-full">
              <p className="font-light text-sm">Еще нет аккаунта?</p>
              <p className="font-light text-xs mb-4">
                Зарегистрируйтесь для быстрого оформления заказов и доступа к истории покупок
              </p>
              <Link
                href="/signup"
                className={`${isPending ? 'pointer-events-none opacity-50' : 'pointer-events-auto opacity-100'} h-9 px-4 py-2 has-[>svg]:px-3 dark:bg-transparent dark:hover:bg-input hover:bg-foreground border-foreground dark:border-input text-foreground hover:text-white dark:text-white bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:outline-none border font-light focus-visible:ring-0 inline-flex cursor-pointer rounded-none items-center justify-center gap-2 whitespace-nowrap text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none`}
              >
                <UserPlus />
                Зарегистрироваться
              </Link>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
