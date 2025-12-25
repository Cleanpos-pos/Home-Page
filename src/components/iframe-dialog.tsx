
'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { ExternalLink, X } from 'lucide-react';
import Link from 'next/link';

export function IframeDialog({
  trigger,
  url,
  title,
}: {
  trigger: React.ReactNode;
  url: string;
  title: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] h-[90vh] p-0 flex flex-col">
        <DialogHeader className="p-4 border-b flex-row flex items-center justify-between">
          <DialogTitle>{title}</DialogTitle>
          <div className="flex items-center gap-4">
             <Button variant="ghost" size="sm" asChild>
                <Link href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>Open full screen</span>
                </Link>
            </Button>
            <DialogClose asChild>
                <Button variant="ghost" size="icon">
                <X className="h-8 w-8" />
                </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="flex-1">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={title}
            allow="microphone"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
