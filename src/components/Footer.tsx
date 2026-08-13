export default function Footer() {
  return (
    <footer className="hidden md:block w-full py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto bg-surface-container dark:bg-surface-container-high mt-12 full-width">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div className="col-span-1 md:col-span-1">
          <span className="text-headline-xl font-headline-xl font-bold text-primary dark:text-inverse-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>local_mall</span>
            Wearify
          </span>
          <p className="text-body-md font-body-md text-on-surface-variant mt-2">Curated fashion for the modern aesthetic.</p>
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-wrap gap-8 md:justify-end">
          <ul className="flex flex-col gap-2">
            <li><a className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary underline transition-all" href="#">About Us</a></li>
            <li><a className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary underline transition-all" href="#">Careers</a></li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li><a className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary underline transition-all" href="#">Shipping & Returns</a></li>
            <li><a className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary underline transition-all" href="#">Privacy Policy</a></li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li><a className="text-body-md font-body-md text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary underline transition-all" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant pt-6 mt-6 flex justify-between items-center text-body-md font-body-md text-on-surface-variant">
        <p>© 2024 Wearify. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
        </div>
      </div>
    </footer>
  );
}
