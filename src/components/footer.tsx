import { Code, Twitter, Github, Linkedin, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { ContactDialog } from './sections/contact';
import { Button } from './ui/button';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8.8c-2.3.2-4.1 2-4.3 4.3-.2 2.3 1.5 4.3 3.8 4.5 2.3.2 4.3-1.5 4.5-3.8.2-2.3-1.5-4.3-3.8-4.5z"/>
        <path d="M12 4v11"/>
    </svg>
);


export function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-slate-50">Posso</span>
                </div>
                <p className="text-sm text-slate-400">
                    Pioneering technology for restaurants, venues, and events.
                </p>
                <div className="flex items-center gap-4 mt-4">
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">X</span>
                    </Link>
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">Github</span>
                    </Link>
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" prefetch={false} className="text-slate-400 hover:text-primary transition-colors">
                        <TikTokIcon className="h-5 w-5" />
                        <span className="sr-only">TikTok</span>
                    </Link>
                </div>
            </div>

            {/* Hospitality Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Restaurants</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/pos" className="hover:text-primary transition-colors">ePOS Systems</Link></li>
                    <li><Link href="/kiosks" className="hover:text-primary transition-colors">Self-Order Kiosks</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Kitchen Displays</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Customer Screens</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Online Ordering</Link></li>
                </ul>
            </div>

            {/* Venues Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Venues & Events</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Ticketing</Link></li>
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Memberships</Link></li>
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Smart Lockers</Link></li>
                    <li><Link href="/digital-signage" className="hover:text-primary transition-colors">Digital Signage</Link></li>
                </ul>
            </div>

            {/* Company Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li>
                        <ContactDialog>
                            <button className="hover:text-primary transition-colors">Contact</button>
                        </ContactDialog>
                    </li>
                    <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                </ul>
            </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          <span>&copy; 2025/2026 Posso Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
