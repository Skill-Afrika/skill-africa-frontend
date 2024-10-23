"use client";

import { HydrationBoundary, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import queryClient from "@/lib/query-client";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <HydrationBoundary>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
