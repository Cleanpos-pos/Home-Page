import { Code, Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-slate-800">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold text-slate-50">Posso</span>
        </div>
        <p className="text-sm text-slate-400">&copy; 2024 Posso Ltd. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">Github</span>
          </Link>
          <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
