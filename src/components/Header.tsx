import { Link, useNavigate } from 'react-router-dom';

export default function Header({ isProductDetail }: { isProductDetail: boolean }) {
  const navigate = useNavigate();

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex flex-col w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-4 bg-background sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-xl">
            <Link to="/" className="text-headline-lg font-headline-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary fill text-[28px]">token</span>
              Wearify
            </Link>
            <nav className="flex items-center gap-8">
              <Link to="/products" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200">Men</Link>
              <Link to="/products" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200">Women</Link>
              <Link to="/products" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200">Accessories</Link>
              <Link to="/products" className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200">Brands</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input className="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md focus:ring-2 focus:ring-primary focus:outline-none w-64 text-on-surface" placeholder="Search products..." type="text" />
            </div>
            <Link to="/wishlist" className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">favorite</span></Link>
            <Link to="/cart" className="p-2 text-on-surface-variant hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">shopping_bag</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-on-tertiary-container rounded-full"></span>
            </Link>
            <Link to="/profile" className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">person</span></Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`md:hidden flex items-center justify-between px-margin-mobile py-4 sticky top-0 bg-background z-40`}>
        {isProductDetail ? (
          <>
            <button aria-label="Go back" onClick={() => navigate(-1)} className="p-2 rounded-full bg-surface-container-low text-on-surface grid place-items-center">
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <Link to="/wishlist" aria-label="Add to wishlist" className="p-2 rounded-full bg-surface-container-low text-on-surface grid place-items-center">
              <span className="material-symbols-outlined text-[20px]">favorite_border</span>
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="text-headline-lg-mobile font-headline-lg-mobile font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-primary fill text-[24px]">token</span>
              Wearify
            </Link>
            <div className="flex items-center gap-3">
              <button className="text-on-surface-variant w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-full"><span className="material-symbols-outlined">search</span></button>
              <Link to="/cart" className="text-on-surface-variant w-10 h-10 flex items-center justify-center bg-surface-container-highest rounded-full"><span className="material-symbols-outlined">shopping_bag</span></Link>
            </div>
          </>
        )}
      </header>
    </>
  );
}
