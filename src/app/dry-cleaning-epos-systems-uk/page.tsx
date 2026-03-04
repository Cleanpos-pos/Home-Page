
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/solutions/dry-cleaning-pos-system');
  }, [router]);

  return null;
}
