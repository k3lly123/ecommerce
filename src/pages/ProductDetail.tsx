import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate network request
    return () => clearTimeout(timer);
  }, [id]);

  // We would normally fetch data based on `id`, but we'll use a static mock for the design
  const product = {
    brand: 'LUMINA',
    name: 'Minimalist Beige Trench Coat',
    price: 185.00,
    originalPrice: 220.00,
    rating: '4.9',
    sold: '2k+ Sold',
    description: "Elevate your outerwear with our Minimalist Beige Trench Coat. Crafted from a premium water-resistant blend, this piece features a clean silhouette, hidden placket, and a soft matte finish. Designed for seamless transition between seasons, offering a sophisticated drape that complements both casual and formal attire.",
    images: [
      '/src/assets/images/beige_trench_coat_1786618571689.jpg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBY1h4tRDK8v4UQKW5400vGsM0Z2xZHDf4nF-KuIKXwyStS4VVh9j4vTGNKQhk8s_d21mSjLiPhCICSTqkjSjRBoaGGnixhdfPE6Xmh3q8z41xXVQgIuHNTokFKseJdiaX6ahipXH_5OGoQqsTbv5Ufj2ROE0JVMkUvgV20F0INYfd8_1Rx5igChMa_E_1fW-tyjITxJmh_jC5R7UwYi3vg00NiknBOr81NOu0whLCR4DMcXDT9fJFt',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2l-snsZ362NZGIXm58s3QJ0nDlWSrj7E42ojhgq4WLnzjooJ9PUo47cvs15WEUAqHJPOx53jE_gnQ2F9CxCZa5pftfpmbcgxfHOjLGuEdUJst8aoSv0yl1eMH9Jsu5p8qTjTu28_REf7CzttFhkkwfocP9lYyj0_HqD_IPTqLmF0K1c4nlJo1u8NHygxZiPRB54VdG25FXw-26IPMt7mwq5LDjnGoz68WSH2erRsqdnkDWJfZxt8o',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtQUghmPu4faWbiYk0CWoWrliWOBvzjLneIHrL5qLM9WtF4eONja1MHqsI9vwdo-Yi_3Dj0UOnxnn_rG8NQNaG0o8UyWS6LXiTwIrimCY64I-zV1V7C-D9eCT7McYzivjjuqNdrP1vPmNz0a3iWhmWNQ7T2JjW9cNN7q9BLaHQgWAfFI6IyQJE4lHEZ57wJOa9NWTPZ7PKcy5wKdZ1aGxdFD-W4BZW9c-Bzot_cmO3p8QfXpSvdEfu'
    ]
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-32 md:pb-xl pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-md md:gap-xl">
        <section className="flex flex-col gap-sm">
          <div className="relative aspect-[3/4] bg-surface-container rounded-xl animate-pulse"></div>
          <div className="flex gap-xs overflow-x-auto hide-scrollbar snap-x">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-20 aspect-[3/4] rounded-lg bg-surface-container animate-pulse shrink-0"></div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6 md:py-4">
          <div className="flex items-center justify-between">
            <div className="h-6 w-24 bg-surface-container animate-pulse rounded"></div>
            <div className="h-6 w-16 bg-surface-container animate-pulse rounded"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-10 w-3/4 bg-surface-container animate-pulse rounded"></div>
            <div className="h-8 w-1/3 bg-surface-container animate-pulse rounded mt-2"></div>
          </div>
          <div className="flex flex-col gap-5 pt-4 border-t border-outline-variant/30">
            <div className="flex items-center gap-4">
              <div className="h-6 w-12 bg-surface-container animate-pulse rounded"></div>
              <div className="flex gap-2">
                {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-surface-container animate-pulse"></div>)}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
            <div className="h-6 w-32 bg-surface-container animate-pulse rounded mb-2"></div>
            <div className="h-4 w-full bg-surface-container animate-pulse rounded"></div>
            <div className="h-4 w-5/6 bg-surface-container animate-pulse rounded"></div>
            <div className="h-4 w-4/6 bg-surface-container animate-pulse rounded"></div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pb-32 md:pb-xl pt-4 md:pt-8 grid grid-cols-1 md:grid-cols-2 gap-md md:gap-xl">
      {/* Image Gallery / Try-On Area */}
      <section className="flex flex-col gap-sm">
        <div className="relative aspect-[3/4] bg-surface-container-low rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover mix-blend-multiply" alt={product.name} src={product.images[selectedImage]} />
          {/* Pagination Pill */}
          <div className="absolute bottom-4 right-4 bg-surface/80 backdrop-blur-md px-3 py-1 rounded-full text-label-md font-label-md text-on-surface">
            {selectedImage + 1}/{product.images.length}
          </div>
          {/* Virtual Try On Button (Floating) */}
          <button className="absolute bottom-4 left-4 bg-primary text-on-primary px-4 py-2 rounded-full flex items-center gap-2 text-label-md font-label-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:flex hidden">
            <span className="material-symbols-outlined text-[18px]">view_in_ar</span>
            Virtual Try-On
          </button>
        </div>
        
        {/* Thumbnail Strip */}
        <div className="flex gap-xs overflow-x-auto hide-scrollbar snap-x">
          {product.images.map((img, index) => (
            <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 aspect-[3/4] rounded-lg border-2 shrink-0 snap-start overflow-hidden transition-opacity ${selectedImage === index ? 'border-primary opacity-100' : 'border-transparent opacity-70 hover:opacity-100'} bg-surface-container-low`}>
              <img className="w-full h-full object-cover mix-blend-multiply" alt={`Thumbnail ${index + 1}`} src={img} />
            </button>
          ))}
          <button className="w-20 aspect-[3/4] rounded-lg border-2 border-transparent bg-surface-container-low shrink-0 snap-start overflow-hidden opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center relative">
            <img className="w-full h-full object-cover mix-blend-multiply blur-[2px]" alt="Video thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8RbRJs0UZYEfqG8YNfmKC27YOljJ7_fLpsgDGbGT2QF19VuiQPQY0s-8rStHzaSE1WldjlL1aFjitm6byItmXq_ooJ20ci721hQw5JCL2xZNTBgEbD5AgejaVUNaVsGKwFDpKk4NYjW6NWoyinSU5q1_WjPpEJ3DVoymuKKfUxp9Lqieqk-RsUTWbFHJoB8jF4vxE_f3R16lbDPGKKjrvWRXqZvO5cODnsEJEZY_K5Xt3gGiZ5Q26" />
            <span className="material-symbols-outlined absolute text-on-surface drop-shadow-md">play_circle</span>
          </button>
        </div>
      </section>

      {/* Product Details Panel */}
      <section className="flex flex-col gap-6 md:py-4">
        {/* Brand & Rating Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 flex items-center justify-center font-bold text-on-surface tracking-widest uppercase text-sm">
              {product.brand}
            </div>
            <span className="material-symbols-outlined text-[16px] text-primary fill">verified</span>
          </div>
          <div className="flex items-center gap-1 text-label-md font-label-md">
            <span className="material-symbols-outlined text-[#FFC107] text-[16px] fill">star</span>
            <span className="text-on-surface font-semibold">{product.rating}</span>
          </div>
        </div>

        {/* Title & Price */}
        <div className="flex flex-col gap-2">
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">
            {product.name}
          </h1>
          <div className="flex items-end gap-3 flex-wrap">
            <span className="text-price-lg font-price-lg text-on-surface">${product.price.toFixed(2)}</span>
            <span className="text-body-lg font-body-lg text-outline line-through mb-0.5">${product.originalPrice.toFixed(2)}</span>
            <span className="bg-on-tertiary-container text-on-tertiary text-[10px] font-bold px-2 py-0.5 rounded-sm mb-1 uppercase tracking-wider">-15%</span>
            <span className="text-label-md font-label-md text-outline ml-auto mb-1">{product.sold}</span>
          </div>
        </div>

        {/* Selectors */}
        <div className="flex flex-col gap-5 pt-4 border-t border-outline-variant/30">
          {/* Size Selector */}
          <div className="flex items-center gap-4">
            <span className="text-body-md font-body-md font-medium text-on-surface w-12">Size</span>
            <div className="flex items-center gap-2">
              {['S', 'M', 'L'].map(size => (
                <button 
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-label-md font-label-md transition-colors ${selectedSize === size ? 'text-on-primary bg-primary border-2 border-primary' : 'text-on-surface-variant bg-surface-container-low hover:bg-surface-variant'}`}
                >
                  {size}
                </button>
              ))}
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-label-md font-label-md text-on-surface-variant bg-surface-container-low opacity-50 cursor-not-allowed">XL</button>
            </div>
          </div>
          {/* Color Selector */}
          <div className="flex items-center gap-4">
            <span className="text-body-md font-body-md font-medium text-on-surface w-12">Color</span>
            <div className="flex items-center gap-3">
              <button className="w-6 h-6 rounded-full border border-outline-variant bg-[#EADDCA] ring-2 ring-offset-2 ring-primary relative"></button>
              <button className="w-6 h-6 rounded-full border border-outline-variant bg-[#1A1A1A] hover:scale-110 transition-transform"></button>
              <button className="w-6 h-6 rounded-full border border-outline-variant bg-[#F5F5DC] hover:scale-110 transition-transform"></button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2 pt-4 border-t border-outline-variant/30">
          <h3 className="text-body-md font-body-md font-semibold text-on-surface">Description</h3>
          <p className="text-body-md font-body-md text-on-surface-variant line-clamp-3">
            {product.description}
          </p>
          <button className="text-label-md font-label-md text-primary font-semibold flex items-center justify-center gap-1 mt-1 group self-center md:self-start">
            Read More 
            <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">expand_more</span>
          </button>
        </div>

        {/* Actions (Sticky on Mobile, Static on Desktop) */}
        <div className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md border-t border-outline-variant/30 p-margin-mobile md:static md:bg-transparent md:border-none md:p-0 md:pt-4 flex items-center gap-sm z-40">
          <button className="flex-1 py-3 px-6 rounded-full border border-primary text-primary font-headline-md text-[16px] hover:bg-primary-fixed hover:text-on-primary-fixed transition-colors grid place-items-center">
            Add Cart
          </button>
          <button onClick={() => navigate('/cart')} className="flex-1 py-3 px-6 rounded-full bg-primary text-on-primary font-headline-md text-[16px] hover:bg-primary-container transition-colors shadow-lg grid place-items-center">
            Buy Now
          </button>
        </div>
      </section>
    </div>
  );
}
