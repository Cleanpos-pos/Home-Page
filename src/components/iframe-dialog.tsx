
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
import { X } from 'lucide-react';

export function IframeDialog({
  children,
  url,
  title,
}: {
  children: React.ReactNode;
  url: string;
  title: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] h-[80vh] p-0 flex flex-col">
        <DialogHeader className="p-4 border-b flex-row flex items-center justify-between">
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="flex-1">
          <iframe
            src={url}
            className="w-full h-full border-0"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
