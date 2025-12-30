import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AgentEnquiryForm } from '@/components/agent-enquiry-form';
import { Badge } from '@/components/ui/badge';
import { Check, HandCoins, Repeat, Handshake } from 'lucide-react';


export const metadata: Metadata = {
  title: 'Become an Independent Sales Agent',
  description: 'Join Posso as an independent sales agent. Build recurring income streams by selling high-demand products like ePOS, kiosks, and card machines to UK businesses.',
  alternates: {
    canonical: '/agents',
  },
};

const revenueStreams = [
    "Upfront commissions on POS hardware & installation",
    "Monthly recurring income from POS software licences",
    "Commission from card machine merchant services",
    "Recurring revenue from transaction fees",
    "Self-order kiosks & tablets — high margin systems",
    "Setup fees for online ordering and websites",
    "Monthly subscription from marketing & social packages",
    "Ongoing income from digital signage management"
];

const idealFor = [
    "Sales professionals",
    "Merchant/card machine agents",
    "Telecoms/utility reps",
    "Self-employed salespeople",
    "Entrepreneurs wanting recurring revenue"
];

export default function AgentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <section className="container mx-auto px-4 py-12 md:px-6 md:py-20">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <Badge variant="outline" className="border-primary/50 text-primary/80 bg-primary/10 py-1 px-3 mb-4">
                        Sales Opportunity
                    </Badge>
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                        Become a POSSO Independent Sales Agent
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        Build multiple recurring income streams selling high-demand products to businesses across the UK. Work independently, set your own schedule, and earn from every client you sign.
                    </p>
                </div>

                <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3"><HandCoins className="w-7 h-7 text-primary"/>Why Become a POSSO Agent?</h2>
                            <p className="text-slate-300">You’re not selling one product — you’re offering a complete suite every restaurant, takeaway, café, salon, barber shop and retail business already needs. Because each business can take multiple services, your earning potential stacks quickly.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3"><Repeat className="w-7 h-7 text-primary"/>Multiple Revenue Streams</h2>
                            <p className="text-slate-300 mb-4">This model allows you to build long-term recurring revenue instead of one-off sales. Every client can generate multiple income lines:</p>
                            <ul className="space-y-2">
                                {revenueStreams.map(stream => (
                                    <li key={stream} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1"/>
                                        <span className="text-slate-300">{stream}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-100 mb-4 flex items-center gap-3"><Handshake className="w-7 h-7 text-primary"/>POSSO Provides Full Support</h2>
                            <p className="text-slate-300 mb-4">You are not working alone. POSSO actively provides lead flow, training, and handles all the technical setup and ongoing support. You focus on what you do best: communicating and closing.</p>
                             <ul className="space-y-2">
                                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-1"/><span className="text-slate-300">Targeted business leads in your chosen UK area</span></li>
                                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-1"/><span className="text-slate-300">Training, demo packs, and proposal templates</span></li>
                                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-1"/><span className="text-slate-300">Installations and tech support handled by our team</span></li>
                            </ul>
                        </div>
                         <div>
                            <h2 className="text-2xl font-bold text-slate-100 mb-4">Who is this ideal for?</h2>
                            <div className="flex flex-wrap gap-2">
                                {idealFor.map(role => (
                                    <Badge key={role} variant="secondary">{role}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Card className="glass-card overflow-hidden sticky top-24">
                        <CardHeader>
                            <CardTitle className="text-slate-50">Register Your Interest</CardTitle>
                            <CardDescription>Send your name, location, and sales background to receive the commission structure and onboarding details.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <AgentEnquiryForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
