import "./index.css";

import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { EnterPassword as EnterPassword } from "./routes/EnterPassword";
import { Home } from "./pages/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./ui/theme";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home name="Rory" />,
});

const enterPasswordRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/password",
  component: EnterPassword,
});

const routeTree = rootRoute.addChildren([indexRoute, enterPasswordRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
