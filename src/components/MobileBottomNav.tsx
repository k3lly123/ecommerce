import { Link, useLocation } from 'react-router-dom';

export default function MobileBottomNav() {
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "flex flex-col items-center justify-center bg-primary text-on-primary rounded-full px-4 py-1.5 opacity-100 scale-95 transition-transform duration-150";
    }
    return "flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all p-2 rounded-lg";
  };

  const getIconClasses = (path: string) => {
    return location.pathname === path ? { fontVariationSettings: "'FILL' 1" } : {};
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface-container-lowest shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-xl">
      <Link to="/" className={getLinkClasses('/')}>
        <span className="material-symbols-outlined" style={getIconClasses('/')}>home</span>
        <span className="text-label-md font-label-md mt-1">Home</span>
      </Link>
      <Link to="/products" className={getLinkClasses('/products')}>
        <span className="material-symbols-outlined" style={getIconClasses('/products')}>search</span>
        <span className="text-label-md font-label-md mt-1">Explore</span>
      </Link>
      <Link to="/cart" className={getLinkClasses('/cart')}>
        <span className="material-symbols-outlined" style={getIconClasses('/cart')}>shopping_bag</span>
        <span className="text-label-md font-label-md mt-1">Cart</span>
      </Link>
      <Link to="/wishlist" className={getLinkClasses('/wishlist')}>
        <span className="material-symbols-outlined" style={getIconClasses('/wishlist')}>favorite</span>
        <span className="text-label-md font-label-md mt-1">Wishlist</span>
      </Link>
      <Link to="/profile" className={getLinkClasses('/profile')}>
        <span className="material-symbols-outlined" style={getIconClasses('/profile')}>person</span>
        <span className="text-label-md font-label-md mt-1">Profile</span>
      </Link>
    </nav>
  );
}
