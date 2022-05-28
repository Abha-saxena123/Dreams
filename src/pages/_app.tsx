import type { AppProps } from "next/app";
import { Layout } from "../modules/common/components/layout/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate } from "react-query/hydration";
import { useMemo } from "react";
import { QUERY_CLIENT_CONFIG } from "../modules/common/utils/constants/api.constant";
import "../modules/common/utils/helpers/api.helpers";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient(QUERY_CLIENT_CONFIG), []);
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
