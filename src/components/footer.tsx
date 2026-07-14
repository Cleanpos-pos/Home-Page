import { Code } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full py-12 mt-20 border-t border-slate-800" role="contentinfo">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {/* Logo and About */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <Code className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold text-slate-50">Posso Ltd</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            UK provider of restaurant ePOS systems, self-order kiosks, ticketing, and digital signage for hospitality and entertainment venues.
                        </p>
                        <p className="text-sm text-slate-400">
                            <a href="tel:+448081753956" className="hover:text-primary transition-colors font-medium">
                                0808 175 3956
                            </a>{' '}
                            (Free call)
                        </p>
                    </div>

                    {/* Hospitality Links */}
                    <nav aria-label="Hospitality solutions">
                        <h4 className="font-bold text-slate-50 mb-4">Hospitality</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/pos" className="hover:text-primary transition-colors">ePOS Systems</Link></li>
                            <li><Link href="/solutions/restaurant-self-service-kiosk" className="hover:text-primary transition-colors font-semibold text-primary/80">Restaurant Kiosks</Link></li>
                            <li><Link href="/tablemaestro" className="hover:text-primary transition-colors">TableMaestro Booking</Link></li>
                            <li><Link href="/self-order-kiosks" className="hover:text-primary transition-colors">Self-Order Kiosks</Link></li>
                            <li><Link href="/online-ordering" className="hover:text-primary transition-colors">Online Ordering</Link></li>
                            <li><Link href="/gloriafood-alternative" className="hover:text-primary transition-colors">GloriaFood Alternative</Link></li>
                            <li><Link href="/credit-card-machines" className="hover:text-primary transition-colors">Card Machines</Link></li>
                            <li><Link href="/delivery-integrations" className="hover:text-primary transition-colors">Delivery Integrations</Link></li>
                            <li><Link href="/drink-order-app" className="hover:text-primary transition-colors">Table Ordering &amp; Waiter Pad</Link></li>
                            <li><Link href="/solutions/franchise-pos-systems" className="hover:text-primary transition-colors">Franchise Solutions</Link></li>
                        </ul>
                    </nav>

                    {/* Venues Links */}
                    <nav aria-label="Venue and event solutions">
                        <h4 className="font-bold text-slate-50 mb-4">Venues &amp; Events</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/ticketing" className="hover:text-primary transition-colors">Ticketing Software</Link></li>
                            <li><Link href="/solutions/trampoline-parks" className="hover:text-primary transition-colors">Trampoline Parks</Link></li>
                            <li><Link href="/solutions/family-entertainment-centers" className="hover:text-primary transition-colors">Family Entertainment</Link></li>
                            <li><Link href="/solutions/amusement-parks" className="hover:text-primary transition-colors">Amusement Parks</Link></li>
                            <li><Link href="/solutions/water-parks" className="hover:text-primary transition-colors">Water Parks</Link></li>
                            <li><Link href="/solutions/museums" className="hover:text-primary transition-colors">Museums</Link></li>
                            <li><Link href="/solutions/zoos-aquariums" className="hover:text-primary transition-colors">Zoos & Aquariums</Link></li>
                            <li><Link href="/solutions/festivals-events" className="hover:text-primary transition-colors">Festivals & Events</Link></li>
                        </ul>
                    </nav>

                    {/* Retail Solutions */}
                    <nav aria-label="Retail solutions">
                        <h4 className="font-bold text-slate-50 mb-4">Retail Solutions</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/solutions/kiosks-for-retail" className="hover:text-primary transition-colors font-semibold text-primary/80">Retail Kiosks</Link></li>
                            <li><Link href="/digital-signage" className="hover:text-primary transition-colors">Digital Signage</Link></li>
                            <li><Link href="/shop-fitting" className="hover:text-primary transition-colors">Shop Fitting</Link></li>
                            <li><Link href="/shop-signage" className="hover:text-primary transition-colors">Shop Signage</Link></li>
                            <li><Link href="/solutions/dry-cleaning-pos-system" className="hover:text-primary transition-colors">Dry Cleaning POS</Link></li>
                        </ul>
                    </nav>

                    {/* Company Links */}
                    <nav aria-label="Company information">
                        <h4 className="font-bold text-slate-50 mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/#about" className="hover:text-primary transition-colors">About Posso</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/downloads" className="hover:text-primary transition-colors">Downloads</Link></li>
                            <li><Link href="/agents" className="hover:text-primary transition-colors">Become an Agent</Link></li>
                            <li><Link href="/finance" className="hover:text-primary transition-colors">Finance Calculator</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                            <li><Link href="/software-terms" className="hover:text-primary transition-colors">Software Terms</Link></li>
                        </ul>
                    </nav>
                </div>

                {/* SEO-rich footer text */}
                <div className="mt-8 pt-8 border-t border-slate-800/50">
                    <p className="text-xs text-slate-500 max-w-4xl mx-auto text-center leading-relaxed">
                        Posso Ltd provides ePOS systems, self-order kiosks, online ordering platforms, digital signage, ticketing software, and card payment machines for restaurants, takeaways, cafes, fast food outlets, entertainment venues, and retail businesses throughout the United Kingdom including London, Manchester, Birmingham, Leeds, Glasgow, Edinburgh, Bristol, Liverpool, Sheffield, and Cardiff.
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Posso Ltd. All rights reserved.</p>
                        <p className="text-sm text-slate-400">
                            Free call: <a href="tel:+448081753956" className="hover:text-primary transition-colors">0808 175 3956</a>
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://x.com/posso_uk" target="_blank" rel="noopener noreferrer" aria-label="Follow Posso on X (Twitter)">
                            <svg className="h-5 w-5 hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/company/posso-uk" target="_blank" rel="noopener noreferrer" aria-label="Follow Posso on LinkedIn">
                            <svg className="h-5 w-5 hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
