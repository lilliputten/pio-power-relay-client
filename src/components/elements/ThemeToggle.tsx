import { cn } from 'cn';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '@/components/providers';
import { Button } from '@/components/ui/button';
import { isDev } from '@/config';

interface TProps {
  className?: string;
  full?: boolean;
  onClick?: () => void;
}

export function ThemeToggle({ className, full, onClick }: TProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        if (onClick) onClick();
      }}
      className={cn(
        isDev && '__ThemeToggle', // DEBUG
        'flex items-center gap-2 __text-xl __font-bold __tracking-tight transition hover:opacity-80',
        'overflow-hidden max-w-100%',
        'border-0',
        'cursor-pointer',
        full && 'w-full',
        className,
      )}
    >
      <span className="flex size-4 items-center">
        <Sun className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      </span>
      <span className={cn(!full && 'sr-only', 'truncate')}>Toggle theme</span>
    </Button>
  );
}
