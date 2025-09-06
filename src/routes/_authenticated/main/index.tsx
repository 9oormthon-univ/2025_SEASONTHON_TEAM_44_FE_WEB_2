import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/main/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Navigate to="/main/$storeId" params={{ storeId: '1' }} replace />;
}
