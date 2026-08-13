import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 'c1',
      name: 'Casual Mandarin Collar Shirt',
      color: 'Blue',
      size: 'M',
      price: 900.00,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm2aRA963f0BqrMpr_Zfuz-HlyZhUVhMEYgjS4sKkc-vRKAL_ajKCMzvc_l1la5x3t5bfXI0jGFqpdKrx-GIgjop1YyadfI9m2Pz76EanRkAD2s28OP4oDIi8sROCrF3v98aBfIdv1APaggpxVSyQwogOOEH4G4-5OoaygteOVHyBwxq7Zpie60vWr-mT7NTubNGwqwrQmHQnx7AO6OqEMBdbWFv-jz9t-626EW-eZ2FUaurTyMa66'
    },
    {
      id: 'c2',
      name: 'Light Hoodie Bold Burger',
      color: 'Grey',
      size: 'L',
      price: 450.00,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1xnaOg5pqPOfaAxv0q7HCOcYGhBRKeCe3YS8b1TOvMU9nkrbuKzJV8Y8aqSnHQtSDEvVl9iyDkMX4fhcL3-JACXbpqXoQHGbiVQR0lpCow7IU5cEiiNX0EHyj5brqxLiQQ7PZ3W2k4Xzx6NkbctAcTe6i6KxkeuMMyxzgWte0m2SHNU-UIxWm3ridIlpEcWwa3Lp0MvYHTkigPWfh2NX_IVQwUoAioegfZ3SgGE2-lvvImBWAPqbE'
    }
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = 0;
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-[100px] md:pb-xl">
      <h1 className="text-headline-xl font-headline-xl mb-lg">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* Cart Items List */}
        <div className="lg:col-span-8 flex flex-col gap-md">
          {items.map(item => (
            <div key={item.id} className="flex gap-md p-md bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low">
              <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-surface-variant rounded-lg overflow-hidden">
                <img className="w-full h-full object-cover mix-blend-multiply" alt={item.name} src={item.image} />
              </div>
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-headline-md font-headline-md text-on-surface line-clamp-1">{item.name}</h3>
                    <button onClick={() => removeItem(item.id)} aria-label="Remove item" className="text-on-surface-variant hover:text-error transition-colors p-1">
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <p className="text-body-md font-body-md text-on-surface-variant mb-2">Color: {item.color} | Size: {item.size}</p>
                  <p className="text-price-lg font-price-lg text-on-surface">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center bg-surface-container-low rounded-full px-1 py-1 border border-outline-variant">
                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded-full transition-colors">
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="w-8 text-center text-body-lg font-body-lg">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-variant rounded-full transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                  <button className="text-body-md font-body-md text-on-surface-variant underline hover:text-primary transition-colors">Move to Wishlist</button>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center py-12 text-on-surface-variant">
              Your cart is empty.
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-surface-container-low sticky top-24">
            <h2 className="text-headline-lg font-headline-lg mb-md">Order Summary</h2>
            <div className="flex flex-col gap-sm mb-lg border-b border-surface-variant pb-md">
              <div className="flex justify-between text-body-lg font-body-lg text-on-surface-variant">
                <span>Subtotal</span>
                <span className="text-on-surface">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-lg font-body-lg text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-on-surface">Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-body-lg font-body-lg text-on-surface-variant">
                <span>Tax</span>
                <span className="text-on-surface">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-lg">
              <span className="text-headline-md font-headline-md">Total</span>
              <span className="text-price-lg font-price-lg">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 bg-primary text-on-primary rounded-full text-body-lg font-body-lg font-semibold hover:bg-inverse-surface transition-colors mb-sm">
              Proceed to Checkout
            </button>
            <div className="flex items-center justify-center gap-2 text-on-surface-variant text-body-md mt-sm">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Carousel */}
      <section className="mt-24">
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg mb-md">Recommended for You</h2>
        <div className="flex overflow-x-auto gap-md pb-md snap-x hide-scrollbar">
          {recommended.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="w-48 md:w-64 flex-shrink-0 snap-start group cursor-pointer">
              <div className="aspect-[3/4] bg-surface-container-low rounded-xl mb-3 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" alt={product.name} src={product.image} />
                {product.sale && (
                  <div className="absolute top-2 left-2 bg-error text-on-error text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Sale</div>
                )}
                <button className="absolute top-2 right-2 p-2 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-on-surface hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-body-md font-body-md font-semibold text-on-surface truncate">{product.name}</p>
                  <p className="text-label-md font-label-md text-on-surface-variant">{product.brand}</p>
                </div>
                <div className="text-right">
                  <p className={`text-body-md font-body-md font-bold ${product.sale ? 'text-error' : 'text-on-surface'}`}>${product.price.toFixed(2)}</p>
                  {product.originalPrice && (
                    <p className="text-label-md font-label-md text-on-surface-variant line-through">${product.originalPrice.toFixed(2)}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const recommended = [
  { id: 'r1', name: 'Essential Heavy Tee', brand: 'H&M', price: 45.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfmo9ZSQqWmyVwSahHZw3P1O4nCiPOb0UZgXastbogx8sPJG51vG6p_ZSB-ou1EJbHkTo52DRbM-g6yu5XfYK_BSSjwOTQAdI7IPj4VWHcf4uxsXsaFSKXQfWjyAHxU-faJWN_JfqAgpluxkfjvYvWWsFItzMtZIm_tLz-ifbrZASmcbYKHYTzOv3j2rj4kYX-ASgDLKrRA2lQJGLC89Ff4JT05UrGWoES_mvkbaTke_T2lrBrPRzM' },
  { id: 'r2', name: 'Zip-Up Core Hoodie', brand: 'Zara', price: 65.00, originalPrice: 85.00, sale: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUI9GGZcYBHVOBO10fmZ7g2f_3gY7M6u9eLVUVQwaIytqKCdG3f7xBSoo8ghyo5nJTO5shOvsxhd_EnH3slw7Fa1qyPsMeK3JulzBMxF2M10diCu0K2Nrj6TVz73ofJx8xkCv5nQCW28tXJiwB2_f6MDoTEzUDHhXnRvgLmTyg52Qy_PhxNThAqGqxT3l1EJ5CLC-_NyZ3RV7984CbUjUJYEgQXuwCSfp9_YnczaaUmg8MjE-XdDZa' },
  { id: 'r3', name: 'Classic Court Sneaker', brand: 'Lacoste', price: 120.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHOHCG09Ldnn15nh0mT2NAEoNKVCjzQFlSQlzgq0B7n6J7IgxawhlKmOcfzKnO-1-EPR-5f_OzrSZE2MG4IDwwpP5KnhyKQBKBfBLY2wtMqN-MUsCu3spX52o01lw9cAQ4ML3r_Sh-Wt8i71Ewjwu5LGB9esNmSEMCc6Z9Ex_gjTlaTbCmG_oRPVSaON2RPvvUSn7EAkDNouHlys2spAwjfYGgPNHGiVlhTX9bnV_KnxNbJloeOzEk' },
];
