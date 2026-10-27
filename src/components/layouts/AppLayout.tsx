import { cn } from 'cn';

import { isDev } from '@/config';

import { NavBar } from '../elements';

interface TProps {
  children: React.ReactNode;
  // contentClassName?: string;
}

export function AppLayout(props: TProps) {
  const { children } = props;
  return (
    <>
      <NavBar
        className={cn(
          isDev && '__AppLayout_NavBar', // DEBUG
        )}
      />
      {/* Render content */}
      {children}
      {/*
      <div
        className={cn(
          isDev && '__AppLayout_Content', // DEBUG
          'flex-1 flex flex-col',
          contentClassName,
        )}
      >
        {children}
      </div>
      */}
    </>
  );
}
