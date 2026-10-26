import { ThemeProvider } from '@/components/providers';

interface TProps {
  children: React.ReactNode;
}

export function AppWrapper(props: TProps) {
  const { children } = props;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      {children}
    </ThemeProvider>
  );
}
