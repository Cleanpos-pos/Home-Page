'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Cookie } from 'lucide-react';
import Link from 'next/link';

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie_consent');
      if (consent === null) {
        setShowConsent(true);
      }
    } catch (e) {
      // localStorage is not available, but we can assume consent is not given.
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    setShowConsent(false);
    try {
      localStorage.setItem('cookie_consent', 'true');
    } catch (e) {
      // localStorage is not available
    }
  };

  const declineConsent = () => {
    setShowConsent(false);
    try {
      localStorage.setItem('cookie_consent', 'false');
    } catch (e) {
      // localStorage is not available
    }
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6">
      <Card className="glass-card max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Cookie className="h-8 w-8 text-primary flex-shrink-0" />
            <div className="flex-grow text-slate-300">
              <h3 className="font-bold text-lg text-slate-50">We use cookies</h3>
              <p className="text-sm">
                This website uses cookies to enhance your experience and ensure you get the best service. For more details, please read our{' '}
                <Link href="/cookie-policy" className="underline text-primary hover:text-accent">
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex gap-2 self-start sm:self-center flex-shrink-0">
              <Button onClick={acceptConsent} size="sm">Accept</Button>
              <Button onClick={declineConsent} variant="outline" size="sm">Decline</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
