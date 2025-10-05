'use client';

import { FC } from 'react';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const GlobalError: FC<Props> = ({ reset }) => {
  return (
    <html>
      <body className="w-screen h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <h2 className="text-4xl mb-4 font-light">Упс. Что-то пошло не так...</h2>
        <p className="mb-6 font-light">
          Пожалуйста, попробуйте обновить страницу или вернуться позже.
        </p>
        <button
          onClick={() => reset()}
          className="cursor-pointer font-light px-4 py-2 border border-foreground dark:border-input/50 bg-transparent hover:bg-foreground dark:hover:bg-input/30 text-foreground hover:text-background dark:hover:text-foreground"
        >
          Попробовать снова
        </button>
      </body>
    </html>
  );
};

export default GlobalError;
