import { HashRouter } from 'react-router';

import { ThemeProvider } from '@/components/providers';

interface TProps {
  children: React.ReactNode;
}

export function MainWrapper(props: TProps) {
  const { children } = props;
  return (
    <HashRouter>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        {children}
      </ThemeProvider>
    </HashRouter>
  );
}
