import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                  Privacy Policy
                </h1>
                <p className="mt-4 text-lg text-slate-300">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <p>
                  Your privacy is important to us. It is Posso Ltd&apos;s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.
                </p>
                <p>
                    We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                </p>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Information We Collect</h2>
                <p>
                  We may collect personal information such as your name, email address, and message when you use our contact form. We use this information to respond to your inquiries and provide you with our services.
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Log Data</h2>
                <p>
                    We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Cookies</h2>
                <p>
                    We use cookies to store information about your preferences and to personalize the content you see. Our use of cookies is detailed in our <Link href="/cookie-policy" className="underline text-primary">Cookie Policy</Link>.
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Security</h2>
                <p>
                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Links to Other Sites</h2>
                <p>
                    Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
                </p>
              </div>

              <div className="mt-12">
                <Button asChild>
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
