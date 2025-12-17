'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Minus, Plus, ShoppingCart, Beef, Salad, IceCream, CreditCard, Landmark } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

const CheeseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5.9 4.2L2 10.3c-1.3 2.4.2 5.5 2.9 5.5h14.2c2.7 0 4.2-3.1 2.9-5.5L18.1 4.2c-1.3-2.4-4.9-2.4-6.2 0z"/>
        <path d="M12 12h.01"/>
        <path d="M16 8h.01"/>
        <path d="M8 8h.01"/>
        <path d="M10 16h.01"/>
        <path d="M14 16h.01"/>
    </svg>
);


const addons = [
  { id: 'double_patty', name: 'Double Patty', price: 2.50, icon: <Beef className="w-5 h-5" /> },
  { id: 'extra_cheese', name: 'Extra Cheese', price: 1.00, icon: <CheeseIcon className="w-5 h-5" /> },
  { id: 'extra_salad', name: 'Extra Salad', price: 0.50, icon: <Salad className="w-5 h-5" /> },
];

const menuItems = [
  { id: 1, name: 'Classic Burger', price: 8.99, imageId: 'kiosk-burger-classic', category: 'Burgers', addons: addons },
  { id: 2, name: 'Cheeseburger', price: 9.99, imageId: 'kiosk-burger-cheese', category: 'Burgers', addons: addons },
  { id: 3, name: 'Bacon Burger', price: 10.99, imageId: 'kiosk-burger-bacon', category: 'Burgers', addons: addons },
  { id: 4, name: 'Fries', price: 3.99, imageId: 'kiosk-fries', category: 'Sides' },
  { id: 5, name: 'Onion Rings', price: 4.99, imageId: 'kiosk-onion-rings', category: 'Sides' },
  { id: 6, name: 'Cola', price: 1.99, imageId: 'kiosk-cola', category: 'Drinks' },
  { id: 7, name: 'Lemonade', price: 1.99, imageId: 'kiosk-lemonade', category: 'Drinks' },
  { id: 8, name: 'Cookie Dough Ice Cream', price: 6.00, imageId: 'kiosk-icecream-cookie', category: 'Desserts' },
  { id: 9, name: 'Choc Fudge Brownie Ice Cream', price: 6.00, imageId: 'kiosk-icecream-fudge', category: 'Desserts' },
  { id: 10, name: 'Phish Food Ice Cream', price: 6.00, imageId: 'kiosk-icecream-phish', category: 'Desserts' },
];

type Addon = typeof addons[0];

type CartItem = {
  id: number;
  cartItemId: string;
  name: string;
  price: number;
  quantity: number;
  imageId: string;
  addons: Addon[];
};

type KioskScreen = 'start' | 'ordering' | 'upsell' | 'payment' | 'thankyou';

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

const QrCode = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        d="M108 108h40v40h-40zM108 52H52v56h56zm-48 8v40H52m48 0v-40"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M108 160v-8m40 8v-8m-40-104v-8m40 8v-8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M52 108h-8m8 40h-8m152 8h8v-8m-8-40h8v-8m-48-48h56v56h-56zm-8 48v-40h48m8 8h-48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M52 152H40v12H28v12H16v12h12v12h12v12h12v-12h12v-12h12v-12H64v-12H52zm128-48h24v12h12v12h-12v12h-12v12h-12v-12h-12v-12h12v-12h-12v-12h12zm-48 48h12v12h-12zm-12 12h-12v12h-12v12h12v12h12v-12h12v-12h-12v-12h-12v12zm-48 0h12v12h-12zm36-12h12v12h-12zm-12-12h12v12h-12zm-12-12h12v12h-12zm36 24h12v12h-12z"
        fill="currentColor"
      />
    </svg>
  );

export function KioskDemo() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState('Burgers');
  const [screen, setScreen] = useState<KioskScreen>('start');
  const [selectedItemForAddons, setSelectedItemForAddons] = useState<typeof menuItems[0] | null>(null);
  const [editingCartItem, setEditingCartItem] = useState<CartItem | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);

  const openAddonModal = (item: typeof menuItems[0]) => {
    setSelectedItemForAddons(item);
    setSelectedAddons([]);
  };

  const openEditAddonModal = (cartItem: CartItem) => {
    const menuItem = menuItems.find(mi => mi.id === cartItem.id);
    if(menuItem) {
      setEditingCartItem(cartItem);
      setSelectedItemForAddons(menuItem);
      setSelectedAddons(cartItem.addons);
    }
  };

  const handleAddonConfirm = () => {
    if (!selectedItemForAddons) return;

    if (editingCartItem) {
      setCart(currentCart => currentCart.map(item => {
        if (item.cartItemId === editingCartItem.cartItemId) {
          const addonPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
          const addonNames = selectedAddons.map(a => a.name).join(', ');
          return {
            ...item,
            price: selectedItemForAddons.price + addonPrice,
            name: `${selectedItemForAddons.name}${addonNames ? ` (${addonNames})` : ''}`,
            addons: selectedAddons,
          };
        }
        return item;
      }));
    } else {
      const cartItemId = `${selectedItemForAddons.id}-${selectedAddons.map(a => a.id).sort().join('-')}`;
      const existingItem = cart.find(item => item.cartItemId === cartItemId);

      if (existingItem) {
        updateQuantity(existingItem.cartItemId, 1);
      } else {
        const addonPrice = selectedAddons.reduce((sum, addon) => sum + addon.price, 0);
        const addonNames = selectedAddons.map(a => a.name).join(', ');
        const newItem: CartItem = {
          id: selectedItemForAddons.id,
          cartItemId,
          name: `${selectedItemForAddons.name}${addonNames ? ` (${addonNames})` : ''}`,
          price: selectedItemForAddons.price + addonPrice,
          quantity: 1,
          imageId: selectedItemForAddons.imageId,
          addons: selectedAddons,
        };
        setCart(currentCart => [...currentCart, newItem]);
      }
    }
    
    closeAddonModal();
  };

  const closeAddonModal = () => {
    setSelectedItemForAddons(null);
    setEditingCartItem(null);
    setSelectedAddons([]);
  };

  const handleAddonSelect = (addon: Addon, checked: boolean) => {
    setSelectedAddons(current => 
      checked ? [...current, addon] : current.filter(a => a.id !== addon.id)
    );
  };

  const addToCart = (item: (typeof menuItems)[0], quantity: number = 1) => {
    if (item.addons && item.addons.length > 0) {
      openAddonModal(item);
      return;
    }
  
    const cartItemId = `${item.id}-`;
    const existingItem = cart.find(i => i.cartItemId === cartItemId);
    if (existingItem) {
      updateQuantity(existingItem.cartItemId, quantity);
    } else {
      setCart(currentCart => [
        ...currentCart,
        { ...item, quantity: quantity, cartItemId, addons: [] },
      ]);
    }
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setCart((currentCart) => {
      return currentCart
        .map((item) => {
          if (item.cartItemId === cartItemId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleStart = () => setScreen('ordering');

  const handleUpsellChoice = (iceCream: typeof menuItems[0] | null) => {
    if (iceCream) {
      addToCart(iceCream, 1);
    }
    setScreen('ordering');
  };

  const handlePayment = () => {
    setScreen('thankyou');
    setTimeout(() => {
      setCart([]);
      setScreen('start');
    }, 8000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const categories = [...new Set(menuItems.map(item => item.category))];
  const iceCreams = menuItems.filter(item => item.category === 'Desserts');

  const renderScreen = () => {
    switch (screen) {
      case 'start':
        return <KioskStartScreen onStart={handleStart} />;
      case 'upsell':
        return (
          <Card className="glass-card overflow-hidden p-8 h-[700px]">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text mb-2">Fancy some ice cream?</h2>
              <p className="text-lg text-slate-300">A perfect treat to finish your meal.</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8">
              {iceCreams.map(iceCream => {
                const image = PlaceHolderImages.find(p => p.id === iceCream.imageId);
                return (
                  <Card key={iceCream.id} className="glass-card overflow-hidden text-center cursor-pointer" onClick={() => handleUpsellChoice(iceCream)}>
                    {image && (
                      <Image src={image.imageUrl} alt={iceCream.name} data-ai-hint={image.imageHint} width={300} height={300} className="w-full h-48 object-cover" />
                    )}
                    <CardContent className="p-4">
                      <h3 className="font-bold text-slate-50">{iceCream.name}</h3>
                      <p className="text-slate-300">£{iceCream.price.toFixed(2)}</p>
                      <Button size="sm" className="w-full mt-2">Add to Order</Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
            <div className="text-center mt-8">
                <Button variant="ghost" onClick={() => handleUpsellChoice(null)}>No thanks, take me back</Button>
            </div>
          </Card>
        );
      case 'payment':
        return (
            <Card className="glass-card overflow-hidden h-[700px] flex flex-col items-center justify-center p-8 text-center">
                <ShoppingCart className="w-16 h-16 text-primary mb-4" />
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">Total to Pay</h2>
                <p className="text-8xl font-bold text-white my-8">£{total.toFixed(2)}</p>
                <p className="text-lg text-slate-300 mb-8">Please choose your payment method.</p>
                <div className="flex gap-8">
                    <Button size="lg" className="h-24 w-48 text-2xl" onClick={handlePayment}>
                        <CreditCard className="mr-4 h-8 w-8"/> Card
                    </Button>
                    <Button size="lg" variant="outline" className="h-24 w-48 text-2xl" onClick={handlePayment}>
                        <Landmark className="mr-4 h-8 w-8"/> Cash
                    </Button>
                </div>
                <Button variant="link" className="mt-8" onClick={() => setScreen('ordering')}>&lt; Back to order</Button>
          </Card>
        );
      case 'thankyou':
        return (
            <Card className="glass-card overflow-hidden h-[700px] flex flex-col items-center justify-center p-8 text-center">
                <QrCode className="w-40 h-40 text-white" />
                <p className="text-lg text-slate-300 mt-4">Scan me for your ticket</p>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text mt-8">Thank You!</h2>
                <p className="text-xl text-slate-300 mt-4">Your order is being prepared.</p>
                <p className="text-lg text-slate-400 mt-2">Please collect at the counter.</p>
            </Card>
        );
      case 'ordering':
      default:
        return (
            <Card className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 h-[700px]">
                    <div className="md:col-span-2 p-6">
                    <div className="flex gap-2 mb-6">
                        {categories.filter(c => c !== 'Desserts').map(category => (
                            <Button 
                                key={category} 
                                variant={activeCategory === category ? 'default' : 'outline'}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <ScrollArea className="h-[550px]">
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
                    <ScrollArea className="flex-grow my-4 h-[470px]">
                        {cart.length === 0 ? (
                        <div className="text-slate-400 text-center py-16">Your cart is empty.</div>
                        ) : (
                        <div className="space-y-4 pr-4">
                            {cart.map((item) => {
                            const image = PlaceHolderImages.find(p => p.id === item.imageId);
                            const menuItem = menuItems.find(mi => mi.id === item.id);
                            return (
                            <div key={item.cartItemId} className="flex items-center gap-4 text-slate-200">
                                {image && <Image src={image.imageUrl} alt={item.name} width={48} height={48} className="rounded-md" />}
                                <div className="flex-grow">
                                  <p className="font-bold text-sm">{item.name}</p>
                                  <p className="text-xs text-slate-400">£{item.price.toFixed(2)}</p>
                                  {menuItem?.addons && menuItem.addons.length > 0 && (
                                    <Button variant="link" className="h-auto p-0 text-xs text-primary" onClick={() => openEditAddonModal(item)}>Customise</Button>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, -1)}><Minus className="h-4 w-4" /></Button>
                                <span className="font-bold w-4 text-center">{item.quantity}</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.cartItemId, 1)}><Plus className="h-4 w-4" /></Button>
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
                        <Button size="lg" className="w-full mt-4" disabled={cart.length === 0} onClick={() => setScreen('upsell')}>
                          Review and Pay
                        </Button>
                    </div>
                    </div>
                </div>
            </Card>
        );
    }
  };

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
        {renderScreen()}
      </div>

      <Dialog open={!!selectedItemForAddons} onOpenChange={(open) => !open && closeAddonModal()}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Customise your {selectedItemForAddons?.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              {selectedItemForAddons?.addons?.map(addon => (
                <div key={addon.id} className="flex items-center space-x-3">
                  <Checkbox 
                    id={addon.id} 
                    onCheckedChange={(checked) => handleAddonSelect(addon, !!checked)}
                    checked={selectedAddons.some(sa => sa.id === addon.id)}
                  />
                  <Label htmlFor={addon.id} className="flex-grow flex items-center justify-between text-base">
                    <div className="flex items-center gap-2">
                      {addon.icon}
                      <span>{addon.name}</span>
                    </div>
                    <span>+£{addon.price.toFixed(2)}</span>
                  </Label>
                </div>
              ))}
            </div>
            <DialogFooter>
              <Button onClick={handleAddonConfirm}>{editingCartItem ? 'Update Item' : 'Add to Order'}</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
    </section>
  );
}

    