'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const menuItems = [
  { id: 1, name: 'Classic Burger', price: 8.99, imageId: 'kiosk-burger-classic', category: 'Burgers' },
  { id: 2, name: 'Cheeseburger', price: 9.99, imageId: 'kiosk-burger-cheese', category: 'Burgers' },
  { id: 3, name: 'Bacon Burger', price: 10.99, imageId: 'kiosk-burger-bacon', category: 'Burgers' },
  { id: 4, name: 'Fries', price: 3.99, imageId: 'kiosk-fries', category: 'Sides' },
  { id: 5, name: 'Onion Rings', price: 4.99, imageId: 'kiosk-onion-rings', category: 'Sides' },
  { id: 6, name: 'Cola', price: 1.99, imageId: 'kiosk-cola', category: 'Drinks' },
  { id: 7, name: 'Lemonade', price: 1.99, imageId: 'kiosk-lemonade', category: 'Drinks' },
];

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageId: string;
};

const KioskStartScreen = ({ onStart }: { onStart: () => void }) => {
  const bgImage = PlaceHolderImages.find(p => p.id === 'kiosk-background');

  return (
    <div
      className="relative rounded-2xl overflow-hidden h-[700px] flex items-center justify-center p-8 cursor-pointer"
      onClick={onStart}
    >
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          data-ai-hint={bgImage.imageHint}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative glass-panel rounded-2xl w-full max-w-md h-full max-h-[500px] flex flex-col items-center justify-center text-center p-8">
        <div className="animate-bounce mb-6">
            <svg width="60" height="60" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="29" height="29" rx="8.5" stroke="hsl(var(--primary))" strokeWidth="3"/>
                <rect x="8" y="8" width="16" height="16" rx="4" fill="hsl(var(--primary))"/>
            </svg>
        </div>
        <h2 className="text-4xl font-bold text-white">TOUCH TO</h2>
        <h1 className="text-6xl font-bold text-primary">START</h1>
        <p className="mt-4 text-slate-300">TAP ANYWHERE TO BEGIN YOUR ORDER</p>
        <Button size="lg" className="mt-8">Order Now &gt;</Button>
      </div>
      <div className="absolute bottom-6 text-slate-300 font-code text-sm tracking-widest">
        KIOSK EATS • SELF SERVICE STATION
      </div>
    </div>
  );
};


export function KioskDemo() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('Burgers');
  const [isStarted, setIsStarted] = useState(false);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const categories = [...new Set(menuItems.map(item => item.category))];

  return (
    <section id="kiosk-demo" className="container mx-auto px-4 py-20 md:px-6">
      <div className="text-center">
        <h2 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl gradient-text">
          Experience Our Kiosk UI
        </h2>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-slate-300 md:text-xl">
          Interact with a live demo of our intuitive self-order kiosk interface. Add items to the cart and see the total update in real-time.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto">
        {!isStarted ? (
          <KioskStartScreen onStart={() => setIsStarted(true)} />
        ) : (
            <Card className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-2 p-6">
                    <div className="flex gap-2 mb-6">
                        {categories.map(category => (
                            <Button 
                                key={category} 
                                variant={activeCategory === category ? 'default' : 'outline'}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <ScrollArea className="h-[500px]">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pr-6">
                        {menuItems.filter(item => item.category === activeCategory).map((item) => {
                            const image = PlaceHolderImages.find(p => p.id === item.imageId);
                            return (
                            <Card key={item.id} className="glass-card overflow-hidden">
                            {image && (
                                <Image
                                    src={image.imageUrl}
                                    alt={item.name}
                                    data-ai-hint={image.imageHint}
                                    width={200}
                                    height={200}
                                    className="w-full h-32 object-cover"
                                />
                            )}
                            <CardContent className="p-4">
                                <h3 className="font-bold text-slate-50">{item.name}</h3>
                                <p className="text-slate-300">£{item.price.toFixed(2)}</p>
                                <Button
                                size="sm"
                                className="w-full mt-2"
                                onClick={() => addToCart(item)}
                                >
                                Add to Order
                                </Button>
                            </CardContent>
                            </Card>
                        )})}
                        </div>
                    </ScrollArea>
                    </div>

                    <div className="md:col-span-1 bg-slate-900/50 p-6 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-50 flex items-center gap-2">
                        <ShoppingCart className="text-primary" />
                        Your Order
                    </h3>
                    <ScrollArea className="flex-grow my-4 h-[350px]">
                        {cart.length === 0 ? (
                        <div className="text-slate-400 text-center py-16">Your cart is empty.</div>
                        ) : (
                        <div className="space-y-4 pr-4">
                            {cart.map((item) => {
                            const image = PlaceHolderImages.find(p => p.id === item.imageId);
                            return (
                            <div key={item.id} className="flex items-center gap-4 text-slate-200">
                                {image && <Image src={image.imageUrl} alt={item.name} width={48} height={48} className="rounded-md" />}
                                <div className="flex-grow">
                                <p className="font-bold">{item.name}</p>
                                <p className="text-sm text-slate-400">£{item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, -1)}><Minus className="h-4 w-4" /></Button>
                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.id, 1)}><Plus className="h-4 w-4" /></Button>
                                </div>
                                <p className="font-bold w-16 text-right">£{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            )})}
                        </div>
                        )}
                    </ScrollArea>
                    <div className="border-t border-slate-700 pt-4 mt-auto">
                        <div className="flex justify-between text-lg font-bold text-slate-50">
                        <span>Total:</span>
                        <span>£{total.toFixed(2)}</span>
                        </div>
                        <Button size="lg" className="w-full mt-4" disabled={cart.length === 0}>
                        Proceed to Checkout
                        </Button>
                    </div>
                    </div>
                </div>
            </Card>
        )}
      </div>
    </section>
  );
}
