import "./index.css";

import ReactDOM from "react-dom/client";

import { StrictMode } from "react";
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { EnterPassword as EnterPassword } from "./routes/EnterPassword";
import { Home } from "./pages/Home/Home";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/password" className="[&.active]:font-bold">
          Enter password
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home name="rory/" />,
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
    <RouterProvider router={router} />
  </StrictMode>
);
