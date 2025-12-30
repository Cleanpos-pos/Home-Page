import { Code, Twitter, Linkedin, Phone } from 'lucide-react';
import Link from 'next/link';
import { ContactDialog } from './sections/contact';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="w-full py-12 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo and About */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold text-slate-50">Posso</span>
                </div>
                <p className="text-sm text-slate-400">
                    Pioneering technology for restaurants, venues, and events.
                </p>
            </div>

            {/* Hospitality Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Hospitality</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/pos" className="hover:text-primary transition-colors">ePOS Systems</Link></li>
                    <li><Link href="/kiosks" className="hover:text-primary transition-colors">Self-Order Kiosks</Link></li>
                    <li><Link href="/digital-signage" className="hover:text-primary transition-colors">Kitchen Displays</Link></li>
                    <li><Link href="/online-ordering" className="hover:text-primary transition-colors">Online Ordering</Link></li>
                     <li><Link href="/franchise" className="hover:text-primary transition-colors">Franchise Solutions</Link></li>
                </ul>
            </div>

            {/* Venues Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Venues &amp; Events</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Ticketing</Link></li>
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Memberships</Link></li>
                    <li><Link href="/ticketing" className="hover:text-primary transition-colors">Smart Lockers</Link></li>
                    <li><Link href="/digital-signage" className="hover:text-primary transition-colors">Digital Signage</Link></li>
                </ul>
            </div>

            {/* Retail Solutions */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Retail Solutions</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/shop-fitting" className="hover:text-primary transition-colors">Shop Fitting</Link></li>
                    <li><Link href="/shop-signage" className="hover:text-primary transition-colors">Shop Signage</Link></li>
                </ul>
            </div>

            {/* Company Links */}
            <div>
                <h4 className="font-bold text-slate-50 mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                    <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    <li><Link href="/agents" className="hover:text-primary transition-colors">Become an Agent</Link></li>
                    <li><Link href="/finance" className="hover:text-primary transition-colors">Finance Calculator</Link></li>
                    <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/cookie-policy" className="hovertext-primary transition-colors">Cookie Policy</Link></li>
                </ul>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 flex items-center justify-between">
            <div className="text-center md:text-left">
                <p className="text-sm text-slate-400">&copy; 2025/2026 Posso Ltd. All rights reserved.</p>
                <p className="text-sm text-slate-400">Call Us: 0808 175 3956</p>
            </div>
            <div className="flex gap-4">
                <a href="https://x.com/posso_uk" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary transition-colors" /></a>
                <a href="https://www.linkedin.com/company/posso-uk" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="h-5 w-5 hover:text-primary transition-colors" /></a>
            </div>
        </div>
      </div>
    </footer>
  );
}
