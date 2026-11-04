import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import type { ReactNode } from "react";

import type { Route } from "./+types/root";
import "~/styles/app.scss";

import ThemeRestoration from "./components/ThemeRestoration";

import Header from "./components/Header";
import Footer from "./components/Footer";

import useGlowing from "./hooks/useGlowing";
import type { Theme } from "./theming";
import about from "content:about";

export function Layout({ children }: { children: ReactNode }) {
  useGlowing();

  let theme: Theme = "dark";

  if (typeof window !== "undefined") {
    theme = window.document.documentElement.dataset.theme as Theme;
  }

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={about.description} />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ThemeRestoration />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return (
    <article>
      <title>{`${about.name} / 404`}</title>
      <header>
        <h1>Page Not Found</h1>
        <hr />
      </header>
      <p>How did you end up here?</p>
    </article>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) return <HydrateFallback />;
    title = "Error";
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <article>
      <header>
        <h1>{title}</h1>
        <hr />
      </header>
      <p>{details}</p>
      {stack && (
        <pre>
          <code>{stack}</code>
        </pre>
      )}
    </article>
  );
}
