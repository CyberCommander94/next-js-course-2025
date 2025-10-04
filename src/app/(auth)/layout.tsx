import { getUser } from "@/services/api/user";
import { UserProvider } from "@/providers/user";
import { FC, PropsWithChildren } from "react";
import Layout from "@/components/layout";
import { cookies } from "next/headers";

const AppLayout: FC<PropsWithChildren> = async ({ children }) => {
  const { data } = await getUser();
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : "light";

  return (
    <UserProvider user={data}>
      <Layout initialTheme={theme}>{children}</Layout>
    </UserProvider>
  );
};

export default AppLayout;
