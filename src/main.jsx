import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MainRouter from "./routes";
const client = new QueryClient();
const route = MainRouter()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={route} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>
);
