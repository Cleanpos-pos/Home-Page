'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DownloadCloud,
  MonitorPlay,
  CreditCard,
  ShoppingCart,
  Smartphone,
  Ticket,
  Menu,
  Home,
  Store,
  Wallet,
} from 'lucide-react';
import { useState } from 'react';

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

const navLinks = [
  { href: '/pos', icon: <ShoppingCart className="mr-2 h-4 w-4" />, label: 'POS' },
  { href: '/kiosks', icon: <Smartphone className="mr-2 h-4 w-4" />, label: 'Kiosks' },
  { href: '/ticketing', icon: <Ticket className="mr-2 h-4 w-4" />, label: 'Ticketing' },
  { href: '/digital-signage', icon: <MonitorPlay className="mr-2 h-4 w-4" />, label: 'Digital Signage' },
  { href: '/credit-card-machines', icon: <CreditCard className="mr-2 h-4 w-4" />, label: 'Card Machines' },
  { href: '/shop-fitting', icon: <Store className="mr-2 h-4 w-4" />, label: 'Shop Fitting' },
  { href: '/finance', icon: <Wallet className="mr-2 h-4 w-4" />, label: 'Finance' },
  { href: 'https://download.anydesk.com/AnyDesk.exe?_ga=2.228450974.22024143.1581947022-1619378576.1575561389', icon: <DownloadCloud className="mr-2 h-4 w-4" />, label: 'Support', isExternal: true },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <Logo />
          <span className="text-xl font-bold text-slate-50 tracking-wide">
            POSSO
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
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
          {navLinks.map(({ href, icon, label, isExternal }) => (
            isExternal ? (
              <a
                key={href}
                href={href}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  {icon}
                  {label}
                </Button>
              </a>
            ) : (
              <Link href={href} key={href}>
                <Button variant="outline" size="sm">
                  {icon}
                  {label}
                </Button>
              </Link>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-950">
                <div className="flex flex-col h-full p-6">
                    <Link href="/" className="flex items-center gap-3 mb-8" prefetch={false} onClick={() => setIsSheetOpen(false)}>
                        <Logo />
                        <span className="text-xl font-bold text-slate-50 tracking-wide">
                            POSSO
                        </span>
                    </Link>
                    <div className="flex flex-col gap-4">
                        <Link href="/" onClick={() => setIsSheetOpen(false)}>
                          <Button variant="outline" className="w-full justify-start">
                            <Home className="mr-2 h-4 w-4" />
                            Home
                          </Button>
                        </Link>
                        {navLinks.map(({ href, icon, label, isExternal }) => (
                             isExternal ? (
                                <a
                                    key={href}
                                    href={href}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsSheetOpen(false)}
                                >
                                    <Button variant="outline" className="w-full justify-start">
                                    {icon}
                                    {label}
                                    </Button>
                                </a>
                                ) : (
                                <Link href={href} key={href} onClick={() => setIsSheetOpen(false)}>
                                    <Button variant="outline" className="w-full justify-start">
                                    {icon}
                                    {label}
                                    </Button>
                                </Link>
                                )
                        ))}
                    </div>
                     <Badge
                        variant="outline"
                        className="mt-auto border-primary/50 text-primary/80 bg-primary/10"
                    >
                        <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Accepting New Projects Now
                    </Badge>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
