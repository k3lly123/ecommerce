import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Location Banner (Mobile) */}
      <div className="md:hidden flex items-center justify-between bg-surface-container-low rounded-lg p-3 mb-md border border-surface-variant mt-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-surface-variant fill">location_on</span>
          <div>
            <p className="text-[10px] text-on-surface-variant leading-none mb-1">Send to</p>
            <p className="text-body-md font-body-md font-medium leading-none">Malang, Indonesia</p>
          </div>
        </div>
        <button className="bg-primary text-on-primary text-label-md font-label-md px-3 py-1.5 rounded-full">Change</button>
      </div>

      {/* Hero Banner */}
      <section className="mb-lg md:mt-8">
        <div className="relative bg-surface-variant rounded-2xl overflow-hidden h-48 md:h-[400px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent z-10 flex flex-col justify-center px-6 md:px-12 w-full md:w-2/3">
            <h2 className="text-headline-md md:text-headline-xl font-headline-md md:font-headline-xl text-on-primary mb-2">Don't miss out —</h2>
            <p className="text-body-md md:text-body-lg text-on-primary/90 mb-4 max-w-sm">Save up to 50% on your favorite products.</p>
            <Link to="/products" className="bg-surface-container-lowest text-primary text-label-md font-label-md px-6 py-2 rounded-full w-max hover:bg-surface-container-low transition-colors">Shop Now</Link>
          </div>
          <img className="absolute inset-0 w-full h-full object-cover object-right md:object-center" alt="Hero" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjbk8k8p2_5QE7jSMJ-fpevnxUeIawRimYX8S-ByhEGY28MBLKGvBn6fQIgOQIIRwX8qgNgngw2Q4fR2hKdLh992_7kFULeH5rAzpQ2EGLYPrp12bIkX-Mwe2cxOlRbBFQVGaR4GVDZZuqpJuayhbpeyM5XeG_F9tr05JfBJO45k-ArIHdFOcLdjNTR9iBRwESvbBbMlQzWZ7qbEp7n7nDP2mkjR81C-HHSL9w0ZDdDJC6StAgIPf7" />
        </div>
      </section>

      {/* Popular Brands */}
      <section className="mb-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-headline-md font-headline-md text-on-surface">Popular Brand</h3>
          <button className="text-body-md text-on-surface-variant hover:text-primary">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center p-3">
                <img className="w-full h-full object-contain" alt={brand.name} src={brand.image} />
              </div>
              <span className="text-label-md font-label-md text-on-surface-variant">{brand.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Flash Sale */}
      <section className="mb-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-headline-md font-headline-md text-on-surface">Flash Sale</h3>
          <div className="flex items-center gap-2 text-label-md font-label-md">
            <span className="text-on-surface-variant">Ends at</span>
            <span className="bg-error text-on-error px-2 py-1 rounded font-mono font-bold tracking-wider">11:12:02</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {flashSaleProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className={`flex flex-col group cursor-pointer ${product.hiddenOnMobile ? 'hidden md:flex' : ''}`}>
              <div className="relative bg-surface-container-low rounded-xl aspect-[3/4] mb-3 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={product.name} src={product.image} />
                <button className="absolute top-2 right-2 w-8 h-8 bg-surface-container-lowest/80 backdrop-blur-sm rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-lowest transition-colors">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                </button>
              </div>
              <h4 className="text-body-md font-body-md font-medium text-on-surface truncate">{product.name}</h4>
              <div className="flex items-center gap-1 mb-1">
                <span className="material-symbols-outlined text-[14px] text-tertiary-container fill">star</span>
                <span className="text-label-md font-label-md text-on-surface-variant">{product.rating}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-body-md font-body-md font-bold text-on-surface">${product.price.toFixed(2)}</span>
                <span className="text-label-md font-label-md text-on-surface-variant line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const brands = [
  { name: 'H&M', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbWYp4XHjO324utPmsmNPEV13JYviVU9BjAF5fhBTIVIKwwhvTqTZ7B2onV63IaPL3SkrloSK7X4l-PHFlDb7m29t4LinqE6zDBxTxycOk3shDdM-el7qDNFTBwOid4z0U-oeiBqwAtp_3O4ErTfljjjAqcJalbHXeAOFxPN36U0jbsNEXu7-SA0McJdfwJxOeOxn9r07Rt0joy5QFuZsmh13vnCK58U6dXMWtfdGfPhN7rVjZqBmt' },
  { name: 'Zara', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXubMIYpAfWYE2_iYWnwKlu9C_G-1ZDXjKSbLsZuSU2pqjH1uYRSCtpy5isMXmx0KjDU1en5RA2CCkYquzBZxkyvB7aDVW57-Wcspl0y7kfM8B00sUpbb70sIYZtFMDTnL4J4hZkGmQhWR5H6vac00jT9t1xJBuwamdurQJ-FwaDnjLaOVB9NN02k2Bb8S2dgI50sZNx82t8RjCzz_gAjAqFNhLKknF8rJlKstLCJMK4jc4Ie8PMZT' },
  { name: 'Lacoste', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXt9rO9F_dqNqXynHmgnn6J9fpWsR4aKhcttXSyI3ePJHXfgOfkmkijzRynkXKda85u54TzdA66BiJkqF6gJV55kkHscp3cFZFj2XAMcYkJw_c1xJBu0FTm4k3-EvcmgviqOurDzTnG171GY_Q6X18jXc0R38KlKKTmtEbXXSAa70H75zNZpojL5ymJBZOtkdiQbVfEcZut9jxRvM1ZxkOAT_1SG_DUfyD37oX5ELxjHjCUV4tygfD' },
  { name: 'Ralph L', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbkaiyNxDtQWRRDSbOTCh7TnhVnyN79WnD3D5xU22uSB7jw9JnOggveUgUlez_Krxn-TMOuSwjsyNvErrLw4l4Ad56viJsONeOwoFn0LZDmoxay1-Zc6gV93W9k3-LK_bGJAQpqn6qhDGrEqu3laGoycJTw4hTAQC7Z9MFMUNg_VUCtSJXKqusWXROlXdXpLIWUn5hLDnfNYCeyIHSi6F2uWqzJQuIGlCZwifFg_zNQ6ABf29YaWFI' },
  { name: 'Puma', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8VnWTFqefmofFJxm10PdN82tJYruy6NTTphZPPpeUrbI94CH6p0DnSOPR7H70DLTekSJfj7JH81SU8Azx09oMqSeLu8IBa_ocpL6zJ_S8AkBUB0VybYgDUgjvNcHDEEJ_Ux_J6MNRk4-NXpJQakq5MT9wRBh5wjlgmEXSl1vGYX5Pj7zar5pN-pPcb20OZkrrFpVOMXk4gRsLjxRrluwIzqDipDrhnV6iF0T17f8K4gX039TO1OJQ' }
];

const flashSaleProducts = [
  { id: '1', name: 'T-Shirt Tomorrow', rating: '4.8', price: 12.00, originalPrice: 20.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr8lbWAnavQ_fMPPNqR7jbCZo6UQ7Nqx9fa7EUh2TA3BzU5uAfRCrPNUVwzRnxLer2zT1QScjviM_vDESqq7u_RWabbc39K6KScW-b5lBkfd0ftpP3BTYFVnVlbFPHMIj5O5OZFzq1kVTO5rLBnVzKm9FiK2Aq-TnwpygTomx37qAeTjO4lCcAEQ1rpxiPwWx4YM68ear3n6Jo44_IW_oYkuFd83dtm8pP6SO5intmYj3paKJuI7B_', hiddenOnMobile: false },
  { id: '2', name: 'Hoodie STWD', rating: '4.7', price: 15.00, originalPrice: 30.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDIRdbif4Al8jhfQ7aOq6YxQzkFR-4D0E9vtXmdEJ5u_R6c1_jSr9r7NEUIruGl8AamLIbD9h2KdWqz1EeZNH3GlDLbJciN6IoOOlxYPEw8D2-arMTajlC9UFhzghIJQ2lq-xTrDiwjcoXsLrAIlwkpfg32bi2i0TkzO9wc2IeM7aeyuV9QsrbnV9X_FS-EIHrSnamSuElJROzf6s3sBVGCeTSRrd-OuvHZa7OQRer3bArA0gQoAF5', hiddenOnMobile: false },
  { id: '3', name: 'Relaxed Denim', rating: '4.9', price: 45.00, originalPrice: 60.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_PNyWrSBh_ti7imuqa4f0kmsEY9_9SCUZkB4XwUi3Z7RiCai4MEUSFnOzLjxNi3PBvEZknrKWcwCAzzGadZvDK8yl9yEwtAk1UVf6s-tdPirZ-sYJcjT1esdvZ7WdSaXgXZFBzO5rPNlhgHFLl7-RyGEfqp8c_VNPySws79QKKCEFFCU5XY1PrrkiycBm7tG3yH8ayPD8kt7MIaFVaJ_E7bwk4wlNZVNLlSxzkqi78ldMTrkGjen3', hiddenOnMobile: true },
  { id: '4', name: 'Oversized Poplin Shirt', rating: '4.6', price: 28.00, originalPrice: 40.00, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAog0lkUIIpNkJufc8qMRc1Vv1pVbp7AMz8nyjOYeVg5ytcj3BEZFIuqZz32pjNqSs3Rm_HcSFezCaNepIqliJRL83kdBHbp2RYgO2Ycpb0Q0M8ONzrtWCzCuJtLfWTk2K3QTUSAzQNo_XADOcvIavR-sMrAtJOiUt8pYM6telFNMiaOBtW-ze1DRkf3ITerFoPwgZJuNrqtAO45tjhENzTk4ybLJLmM9266Y2xC90kg4W4gLTjOK92', hiddenOnMobile: true },
];
