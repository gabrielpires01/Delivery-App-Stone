import { QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import Page from "./components";
import Loader from "./components/Loader";
import queryClient from "./react-query/query_client";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
            <Loader />
            <Page />
        </Suspense>
    </QueryClientProvider>
);
