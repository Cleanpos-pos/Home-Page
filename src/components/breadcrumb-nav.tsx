import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 md:px-6 py-3">
      <ol className="flex items-center gap-1.5 text-sm text-slate-400 flex-wrap">
        <li>
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-slate-600" />
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
