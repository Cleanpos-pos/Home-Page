import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn about how Posso Ltd uses cookies on its website to enhance user experience and provide our services.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
                  Cookie Policy
                </h1>
                <p className="mt-4 text-lg text-slate-300">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">What are cookies?</h2>
                <p>
                  A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.
                </p>
              </div>
              
              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">How do we use cookies?</h2>
                <p>
                  We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    <strong>Functionality Cookies:</strong> We use cookies to remember your preferences. For example, we use a cookie to remember your cookie consent choice. This is essential for providing you with a better user experience.
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> We may use third-party analytics services (like Google Analytics) to help us understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-slate-300">
                <h2 className="text-2xl font-bold text-slate-100">Your Choices</h2>
                <p>
                  When you first visit our site, we show you a banner to let you know we use cookies and to ask for your consent. You can choose to accept or decline the use of non-essential cookies. If you decline, we will only use the essential cookies required for the site to function.
                </p>
                <p>
                  You can also control and/or delete cookies as you wish – for details, see aboutcookies.org. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
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
