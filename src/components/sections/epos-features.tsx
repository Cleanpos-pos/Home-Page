'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  CreditCard,
  Monitor,
  Smartphone,
  Globe,
  Clock,
  BarChart3,
  Users,
  Utensils,
  QrCode,
  Languages,
  ShieldCheck,
  Printer,
  WifiOff,
  Split,
  Tag,
  CalendarClock,
  Truck,
  Phone,
  Layers,
} from 'lucide-react';

const featureCategories = [
  {
    title: 'Order Management',
    features: [
      { icon: ShoppingCart, name: 'Full POS Till System', description: 'Touchscreen ordering with full menu, modifiers, and combo management.' },
      { icon: Smartphone, name: 'Self-Order Kiosk Mode', description: 'Attract screen, customer ordering, and payment — all self-service.' },
      { icon: Globe, name: 'Online Ordering', description: 'QR code, website, and app ordering with delivery and collection.' },
      { icon: Utensils, name: 'Table Ordering', description: 'Floor plan management, waiter mode, and pay-at-table.' },
      { icon: CalendarClock, name: 'Scheduled Orders', description: 'ASAP and future ordering with time slot management and capacity control.' },
      { icon: Layers, name: 'Service Types', description: 'Dine-in, takeaway, delivery, and collection — all from one system.' },
    ],
  },
  {
    title: 'Payments & Finance',
    features: [
      { icon: CreditCard, name: 'Integrated Card Payments', description: 'Teya terminal integration with contactless, chip & PIN, Apple Pay, and Google Pay.' },
      { icon: Split, name: 'Split Bills', description: 'Split by number of people, by item, or by custom amount.' },
      { icon: Clock, name: 'Shift & Cash Management', description: 'Opening float, cash drops, blind count closing, and variance alerts.' },
      { icon: BarChart3, name: 'X & Z Reports', description: 'Running totals and end-of-day reconciliation with full audit trail.' },
      { icon: Tag, name: 'Discounts & Promotions', description: 'Percentage off, fixed amount, BOGO, free delivery, coupon codes, and timed deals.' },
      { icon: ShoppingCart, name: 'Refund Processing', description: 'Full and partial refunds via terminal with link to original transaction.' },
    ],
  },
  {
    title: 'Kitchen & Operations',
    features: [
      { icon: Monitor, name: 'Kitchen Display System', description: 'Real-time order display with item completion tracking and production totals.' },
      { icon: Printer, name: 'Receipt & Kitchen Printing', description: 'Thermal printer support, network and USB, with custom receipt templates.' },
      { icon: WifiOff, name: 'Offline-First Operation', description: 'Works without internet. Automatically syncs when reconnected — zero data loss.' },
      { icon: QrCode, name: 'QR Code Ordering', description: 'Table-specific QR codes for customer ordering, tracking, and payment.' },
      { icon: Phone, name: 'Caller ID Integration', description: 'Phone number capture for delivery orders with customer history lookup.' },
      { icon: Truck, name: 'Delivery Zone Management', description: 'Geographic zones, custom delivery fees, minimum order values, and estimated times.' },
    ],
  },
  {
    title: 'Management & Settings',
    features: [
      { icon: Utensils, name: 'Visual Menu Builder', description: 'Drag-and-drop categories, images, modifiers, allergens, and availability controls.' },
      { icon: Users, name: 'Staff & Access Control', description: 'Role-based permissions, staff login tracking, and employee management.' },
      { icon: Languages, name: '5 Languages Built-In', description: 'English, Spanish, French, Italian, and Simplified Chinese — switch instantly.' },
      { icon: ShieldCheck, name: 'Allergen Management', description: '14 EU-standard allergens tagged per product with customer-facing alerts.' },
      { icon: BarChart3, name: 'Sales Analytics', description: 'Revenue tracking, payment breakdowns, hourly summaries, and staff performance.' },
      { icon: Globe, name: 'Third-Party Integrations', description: 'Hubrise, GloriaFood, Shipday delivery tracking, and more.' },
    ],
  },
];

export function EposFeatures() {
  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <Badge className="bg-primary/10 text-primary border-primary/30 mb-4">30+ FEATURES</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
            Posso ePOS — Every Feature Your Business Needs
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Built for restaurants, takeaways, and hospitality — our POS till system is packed with features that save time, reduce errors, and increase revenue.
          </p>
        </div>

        <div className="space-y-16">
          {featureCategories.map((category, catIndex) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="glass-card border-slate-700/50 h-full">
                      <CardContent className="p-5 flex gap-4 items-start">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{feature.name}</h4>
                          <p className="text-slate-400 text-sm mt-1">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center glass-card rounded-2xl border border-primary/20 p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">Plus Much More</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Multi-Tenant Support',
              'Customer Facing Display',
              'Combo & Bundle Builder',
              'Opening Hours Exceptions',
              'Service Charges',
              'Tax Configuration',
              'Void & No Sale Reasons',
              'Order History',
              'Cross-Platform (Web + Desktop)',
              'Real-Time Cloud Sync',
            ].map((tag) => (
              <Badge key={tag} variant="outline" className="border-slate-600 text-slate-300 py-1.5 px-3">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        {/* Brochure Download */}
        <div className="mt-12 text-center">
          <a
            href="/posso-one-product-brochure.pdf"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg py-4 px-8 rounded-xl shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-primary/50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Posso One Product Brochure (PDF)
          </a>
          <p className="text-slate-500 text-sm mt-3">14-page guide covering POS, KDS, Kiosk, Online Ordering, Payments &amp; Hardware</p>
        </div>
      </div>
    </section>
  );
}
