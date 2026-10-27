import { AppRoutes } from '@/AppRoutes';
import { AppLayout } from '@/components/layouts';
import { AppWrapper } from '@/components/wrappers';

export function App() {
  return (
    <AppWrapper>
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </AppWrapper>
  );
}
