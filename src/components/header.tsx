'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
  Globe,
  Newspaper,
  ChevronDown,
  Building,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState, useEffect } from 'react';

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

const hospitalityLinks = [
  { href: '/pos', label: 'ePOS Systems' },
  { href: '/kiosks', label: 'Self-Order Kiosks' },
  { href: '/online-ordering', label: 'Online Ordering' },
  { href: '/credit-card-machines', label: 'Card Machines' },
  { href: '/franchise', label: 'Franchise Solutions' },
];

const solutionsLinks = [
    { href: '/solutions/trampoline-parks', label: 'Trampoline Parks' },
    { href: '/solutions/family-entertainment-centers', label: 'Family Entertainment' },
    { href: '/solutions/amusement-parks', label: 'Amusement Parks' },
    { href: '/solutions/water-parks', label: 'Water Parks' },
    { href: '/solutions/museums', label: 'Museums' },
    { href: '/solutions/zoos-aquariums', label: 'Zoos & Aquariums' },
    { href: '/solutions/wake-parks', label: 'Wake & Aqua Parks' },
    { href: '/solutions/rock-climbing-gyms', label: 'Rock Climbing Gyms' },
    { href: '/solutions/playcenters-softplay', label: 'Soft Play & Playcenters' },
    { href: '/solutions/roller-skating-rinks', label: 'Roller Skating Rinks' },
    { href: '/solutions/ice-skating-rinks', label: 'Ice Skating Rinks' },
    { href: '/solutions/ski-resorts', label: 'Ski Resorts' },
    { href: '/solutions/spas-wellness-centers', label: 'Spas & Wellness' },
    { href: '/solutions/festivals-events', label: 'Festivals & Events' },
]

const retailLinks = [
  { href: '/digital-signage', label: 'Digital Signage' },
  { href: '/shop-fitting', label: 'Shop Fitting' },
  { href: '/shop-signage', label: 'Shop Signage' },
];

const companyLinks = [
  { href: '/finance', icon: <Wallet className="mr-2 h-4 w-4" />, label: 'Finance' },
  { href: '/blog', icon: <Newspaper className="mr-2 h-4 w-4" />, label: 'Blog' },
  { href: 'https://download.anydesk.com/AnyDesk.exe?_ga=2.228450974.22024143.1581947022-1619378576.1575561389', icon: <DownloadCloud className="mr-2 h-4 w-4" />, label: 'Support', isExternal: true },
]

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navLinks = [
    {
      label: 'Hospitality',
      icon: <ShoppingCart className="mr-2 h-4 w-4" />,
      links: hospitalityLinks,
    },
    {
      label: 'Solutions',
      icon: <Building className="mr-2 h-4 w-4" />,
      links: solutionsLinks,
    },
     {
      label: 'Retail',
      icon: <Store className="mr-2 h-4 w-4" />,
      links: retailLinks,
    },
  ];

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3" prefetch={false}>
            <Logo />
            <span className="text-xl font-bold text-slate-50 tracking-wide">
              POSSO
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((navLink) => (
              <DropdownMenu key={navLink.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    {navLink.icon}
                    {navLink.label}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {navLink.links.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            {companyLinks.map(({ href, icon, label, isExternal }) => (
              isExternal ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    {icon}
                    {label}
                  </Button>
                </a>
              ) : (
                <Link href={href} key={label}>
                  <Button variant="outline" size="sm">
                    {icon}
                    {label}
                  </Button>
                </Link>
              )
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
            {isClient && (
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                    <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                    </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-slate-950">
                        <SheetHeader>
                        <SheetTitle className="sr-only">Navigation</SheetTitle>
                        </SheetHeader>
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
                                {navLinks.flatMap(section => section.links).map(({ href, label }) => (
                                  <Link href={href} key={label} onClick={() => setIsSheetOpen(false)}>
                                      <Button variant="outline" className="w-full justify-start">
                                      {label}
                                      </Button>
                                  </Link>
                                ))}
                                {companyLinks.map(({ href, icon, label, isExternal }) => (
                                    isExternal ? (
                                        <a
                                            key={label}
                                            href={href}
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
                                        <Link href={href} key={label} onClick={() => setIsSheetOpen(false)}>
                                            <Button variant="outline" className="w-full justify-start">
                                            {icon}
                                            {label}
                                            </Button>
                                        </Link>
                                        )
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </div>
      </div>
    </header>
  );
}
