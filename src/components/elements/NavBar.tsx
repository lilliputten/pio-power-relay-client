import { cn } from 'cn';
import { Menu, Rocket } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { appShortTitle, isDev, rootPageUrl, testPageUrl } from '@/config';

import { ThemeToggle } from './ThemeToggle';

interface TProps {
  className?: string;
}

interface TNavItem {
  label: string;
  href: string;
}

const navItems: TNavItem[] = [
  { label: 'Home', href: rootPageUrl },
  { label: 'Test', href: testPageUrl },
  // DEMO
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
];

const extraButtonText = 'Get Started';

function LogoAndTitle({ className }: TProps) {
  return (
    <Link
      to={rootPageUrl}
      className={cn(
        isDev && '__LogoAndTitle', // DEBUG
        'flex items-center gap-2 text-xl font-bold tracking-tight transition hover:opacity-80',
        'overflow-hidden max-w-100%',
        className,
      )}
    >
      <Rocket className="size-6 shrink-0 text-primary" />
      <span
        className={cn(
          // "hidden sm:inline-block", // Hide on small screens
          'flex-1 truncate overflow-hidden',
        )}
      >
        {appShortTitle}
      </span>
    </Link>
  );
}

function ExtraButtonContent({ className }: TProps) {
  return (
    <Link
      to={rootPageUrl}
      className={cn(
        isDev && '__ExtraButtonContent', // DEBUG
        'flex items-center gap-1 tracking-tight transition hover:opacity-80',
        'overflow-hidden max-w-100%',
        className,
      )}
    >
      <Rocket className="size-4 shrink-0 text-white" />
      <span className={cn('flex-1 truncate overflow-hidden')}>{extraButtonText}</span>
    </Link>
  );
}

export function NavBar({ className }: TProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header
      className={cn(
        isDev && '__NavBar', // DEBUG
        'fixed top-0 right-0 left-0 z-50 border-b border-border bg-background/80 backdrop-blur-md',
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div
          className={cn(
            isDev && '__NavBar_LogoSection', // DEBUG
            'flex items-center gap-2 overflow-hidden max-w-100%',
          )}
        >
          <LogoAndTitle />
        </div>

        {/* Nav links on the top bar */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button size="sm">
            <ExtraButtonContent />
          </Button>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
              <Menu className="size-10 cursor-pointer p-2 transition hover:opacity-80" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="__pt-12 flex w-75 flex-col overflow-hidden sm:w-100"
            >
              <ScrollArea className="flex-1 overflow-hidden">
                <SheetHeader className="max-w-100% overflow-hidden pr-18">
                  <LogoAndTitle />
                </SheetHeader>

                {/* Nav links on the side panel */}
                <nav className="mt-6 flex flex-col gap-2 px-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setIsOpen(false)} // Close drawer on navigation
                      className={cn(
                        'block py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-foreground',
                        // 'border-b border-border/40',
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-2 pt-4">
                    <ThemeToggle full onClick={() => setIsOpen(false)} />
                    <Button className="w-full" onClick={() => setIsOpen(false)}>
                      <ExtraButtonContent />
                    </Button>
                  </div>
                </nav>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
