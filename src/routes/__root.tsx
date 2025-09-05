import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { OverlayProvider } from 'overlay-kit';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <div className="max-w-[768px] mx-auto flex justify-items-center scrollbar-hide">
        <OverlayProvider>
          <Outlet />
        </OverlayProvider>
      </div>
      {import.meta.env.DEV && <TanStackRouterDevtools />}
    </>
  );
}
