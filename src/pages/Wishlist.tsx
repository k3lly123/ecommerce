import { Link } from 'react-router-dom';

export default function Wishlist() {
  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-[100px] md:pb-xl">
      <h1 className="text-headline-xl font-headline-xl mb-lg">Your Wishlist</h1>
      <div className="text-center py-16 bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low">
        <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">favorite_border</span>
        <h2 className="text-headline-md font-headline-md text-on-surface mb-2">Your wishlist is empty</h2>
        <p className="text-body-md text-on-surface-variant mb-6">Save items you love to build your perfect wardrobe.</p>
        <Link to="/products" className="inline-block px-6 py-3 rounded-full bg-primary text-on-primary font-medium hover:bg-inverse-surface transition-colors">
          Explore Products
        </Link>
      </div>
    </div>
  );
}
