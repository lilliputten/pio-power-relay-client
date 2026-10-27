import { Routes, Route } from 'react-router';

import { SamplePage } from '@/components/pages';
import { TestPage } from '@/components/pages';
import { rootPageUrl, testPageUrl } from '@/config';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={rootPageUrl} element={<SamplePage />} />
      <Route path={testPageUrl} element={<TestPage />} />
    </Routes>
  );
}
