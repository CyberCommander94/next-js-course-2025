import { getUser } from '@/services/api/user';
import { UserProvider } from '@/providers/user';
import { FC, PropsWithChildren } from 'react';
import Layout from '@/components/layout';
import { cookies } from 'next/headers';
import { FavoriteProvider } from '@/providers/favorite';
import ThemeProvider from '@/providers/theme';

const AppLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value === 'dark' ? 'dark' : 'light';

  return (
    <UserProvider isAuthorized={data}>
      <ThemeProvider initialTheme={theme}>
        <FavoriteProvider>
          <Layout>{children}</Layout>
        </FavoriteProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default AppLayout;
