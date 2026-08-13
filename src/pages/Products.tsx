import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate network request
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg flex flex-col md:flex-row gap-lg">
      {/* Sidebar Filters (Desktop) */}
      <aside className="w-full md:w-64 flex-shrink-0 hidden md:block">
        <div className="sticky top-24 space-y-md">
          <div>
            <h3 className="text-headline-md font-headline-md mb-sm">Category</h3>
            <div className="space-y-xs text-body-md font-body-md text-on-surface-variant flex flex-col">
              <label className="flex items-center gap-xs cursor-pointer"><input type="checkbox" defaultChecked className="form-checkbox text-primary rounded" /> Coats & Jackets</label>
              <label className="flex items-center gap-xs cursor-pointer"><input type="checkbox" className="form-checkbox text-primary rounded" /> Sweaters</label>
              <label className="flex items-center gap-xs cursor-pointer"><input type="checkbox" className="form-checkbox text-primary rounded" /> Bags</label>
              <label className="flex items-center gap-xs cursor-pointer"><input type="checkbox" className="form-checkbox text-primary rounded" /> Accessories</label>
            </div>
          </div>
          <div className="border-t border-surface-container pt-md">
            <h3 className="text-headline-md font-headline-md mb-sm">Size</h3>
            <div className="flex flex-wrap gap-xs">
              <button className="w-10 h-10 rounded-full border border-outline-variant text-body-md font-body-md flex items-center justify-center hover:border-primary transition-colors">S</button>
              <button className="w-10 h-10 rounded-full border border-primary bg-primary text-on-primary text-body-md font-body-md flex items-center justify-center">M</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant text-body-md font-body-md flex items-center justify-center hover:border-primary transition-colors">L</button>
              <button className="w-10 h-10 rounded-full border border-outline-variant text-body-md font-body-md flex items-center justify-center hover:border-primary transition-colors">XL</button>
            </div>
          </div>
          <div className="border-t border-surface-container pt-md">
            <h3 className="text-headline-md font-headline-md mb-sm">Color</h3>
            <div className="flex flex-wrap gap-xs">
              <button className="w-8 h-8 rounded-full bg-[#EADDCA] border border-outline-variant ring-2 ring-primary transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-outline-variant ring-2 ring-transparent hover:ring-outline transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-[#F5F5DC] border border-outline-variant ring-2 ring-transparent hover:ring-outline transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-[#556B2F] border border-outline-variant ring-2 ring-transparent hover:ring-outline transition-all"></button>
            </div>
          </div>
          <div className="border-t border-surface-container pt-md">
            <h3 className="text-headline-md font-headline-md mb-sm">Price Range</h3>
            <div className="flex items-center gap-sm">
              <input type="text" placeholder="$Min" className="w-full bg-surface-container border-none rounded-lg text-body-md px-sm py-2 focus:ring-1 focus:ring-primary" />
              <span className="text-on-surface-variant">-</span>
              <input type="text" placeholder="$Max" className="w-full bg-surface-container border-none rounded-lg text-body-md px-sm py-2 focus:ring-1 focus:ring-primary" />
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid Area */}
      <div className="flex-grow flex flex-col">
        {/* Toolbar */}
        <div className="flex justify-between items-center mb-md">
          <span className="text-body-md font-body-md text-on-surface-variant">Showing {productsList.length} products</span>
          <div className="flex items-center gap-sm">
            <button className="md:hidden flex items-center gap-xs px-sm py-2 rounded-full border border-outline-variant text-body-md font-body-md">
              <span className="material-symbols-outlined text-sm">tune</span> Filters
            </button>
            <select className="bg-surface-container border-none rounded-full px-sm py-2 text-body-md font-body-md focus:ring-1 focus:ring-primary cursor-pointer hidden md:block">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-sm md:gap-md">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex flex-col">
                <div className="w-full aspect-[3/4] rounded-xl mb-sm bg-surface-container animate-pulse"></div>
                <div className="h-5 w-3/4 bg-surface-container animate-pulse rounded mb-2"></div>
                <div className="h-4 w-1/4 bg-surface-container animate-pulse rounded"></div>
              </div>
            ))
          ) : (
            productsList.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="flex flex-col group cursor-pointer">
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden mb-sm bg-surface-container">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name} src={product.image} />
                  <button className="absolute top-sm right-sm w-8 h-8 rounded-full bg-surface/80 backdrop-blur flex items-center justify-center hover:bg-surface transition-colors">
                    <span className={`material-symbols-outlined text-sm ${product.isFavorite ? 'text-primary fill' : 'text-on-surface'}`}>favorite</span>
                  </button>
                  <div className="absolute bottom-sm left-sm px-2 py-1 bg-surface/80 backdrop-blur rounded text-[10px] font-bold tracking-wider">{product.brand}</div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-body-md font-body-md font-medium text-on-surface line-clamp-1">{product.name}</h4>
                    <div className="flex items-center gap-xs mt-1">
                      <span className="text-body-md font-body-md font-bold text-primary">${product.price.toFixed(2)}</span>
                      {product.originalPrice && <span className="text-xs text-on-surface-variant line-through">${product.originalPrice.toFixed(2)}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="material-symbols-outlined text-sm text-tertiary fill">star</span>
                    <span className="font-medium">{product.rating}</span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Load More */}
        {!loading && (
          <div className="mt-lg flex justify-center">
            <button className="px-6 py-3 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-colors">Load More</button>
          </div>
        )}
      </div>
    </div>
  );
}

const productsList = [
  { id: '1', name: 'Minimalist Beige Trench', brand: 'LUMINA', price: 185.00, originalPrice: 220.00, rating: '4.9', image: '/src/assets/images/beige_trench_coat_1786618571689.jpg', isFavorite: true },
  { id: '2', name: 'Premium Crossbody Bag', brand: 'LUMINA', price: 145.00, originalPrice: null, rating: '4.8', image: '/src/assets/images/leather_crossbody_bag_1786618582701.jpg', isFavorite: false },
  { id: '3', name: 'Chunky Knit Sweater', brand: 'STUDIO', price: 95.00, originalPrice: null, rating: '4.7', image: '/src/assets/images/cream_knit_sweater_1786618594977.jpg', isFavorite: false },
  { id: '4', name: 'Olive Bomber Jacket', brand: 'LUMINA', price: 125.00, originalPrice: 160.00, rating: '4.9', image: '/src/assets/images/olive_bomber_jacket_1786618605526.jpg', isFavorite: false },
  { id: '5', name: 'Classic Heather Tee', brand: 'STUDIO', price: 24.00, originalPrice: null, rating: '4.6', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDak_utgKnwHJ362d496Wfo08WSHscAvMVGRv2SAN7199T_zQGvly_24W3_kd0hoitcvo0qlwE1wnC2OSDHPHfl0L86aY0pp-wIsG90Apoi3BF7CWPdS0SJPpoftJ2bwBCs2nw321o5zH6eCFe_odmC1csXiChwmnpT_njvgD95-wMboSmdFkCa1AXj7dsPuc27tb3B8kmKUNRNKyb4hrka1LgajLZXjANXr1rOFSmHI3dXU2YEbXCl', isFavorite: false },
  { id: '6', name: 'Oversized Poplin', brand: 'LUMINA', price: 35.00, originalPrice: 45.00, rating: '4.5', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAog0lkUIIpNkJufc8qMRc1Vv1pVbp7AMz8nyjOYeVg5ytcj3BEZFIuqZz32pjNqSs3Rm_HcSFezCaNepIqliJRL83kdBHbp2RYgO2Ycpb0Q0M8ONzrtWCzCuJtLfWTk2K3QTUSAzQNo_XADOcvIavR-sMrAtJOiUt8pYM6telFNMiaOBtW-ze1DRkf3ITerFoPwgZJuNrqtAO45tjhENzTk4ybLJLmM9266Y2xC90kg4W4gLTjOK92', isFavorite: false },
];
