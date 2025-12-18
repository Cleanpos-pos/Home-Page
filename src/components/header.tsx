'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DownloadCloud, MonitorPlay } from 'lucide-react';

const Logo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="1.5"
      width="29"
      height="29"
      rx="8.5"
      stroke="hsl(var(--primary))"
      strokeWidth="3"
    />
    <rect x="8" y="8" width="16" height="16" rx="4" fill="hsl(var(--primary))" />
  </svg>
);

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <Logo />
          <span className="text-xl font-bold text-slate-50 tracking-wide">
            POSSO
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Badge
            variant="outline"
            className="border-primary/50 text-primary/80 bg-primary/10"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting New Projects Now
          </Badge>
          <Link href="/digital-signage">
            <Button variant="outline">
              <MonitorPlay className="mr-2 h-4 w-4" />
              Digital Signage
            </Button>
          </Link>
          <a
            href="https://download.anydesk.com/AnyDesk.exe?_ga=2.228450974.220224143.1581947022-1619378576.1575561389"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              <DownloadCloud className="mr-2 h-4 w-4" />
              Support App
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
