import { Code } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-4 z-50 w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 glass-panel rounded-2xl">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <Code className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-slate-50">Posso</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="#services" className="text-slate-300 hover:text-primary transition-colors" prefetch={false}>
            Services
          </Link>
          <Link href="#about" className="text-slate-300 hover:text-primary transition-colors" prefetch={false}>
            About
          </Link>
          <Link href="#testimonials" className="text-slate-300 hover:text-primary transition-colors" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-primary transition-colors" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
