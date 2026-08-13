export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-md md:py-lg pb-[100px] md:pb-xl">
      <h1 className="text-headline-xl font-headline-xl mb-lg">Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        <div className="md:col-span-1">
          <div className="bg-surface-container-lowest p-lg rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary text-on-primary flex items-center justify-center text-headline-xl font-headline-xl mb-4">
              JD
            </div>
            <h2 className="text-headline-md font-headline-md text-on-surface">John Doe</h2>
            <p className="text-body-md text-on-surface-variant mb-6">john.doe@example.com</p>
            <button className="w-full py-2 border border-outline-variant rounded-full text-body-md font-medium hover:border-primary hover:text-primary transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div className="md:col-span-2 flex flex-col gap-sm">
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">package_2</span>
              <span className="text-body-lg font-medium">My Orders</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">location_on</span>
              <span className="text-body-lg font-medium">Saved Addresses</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-on-surface-variant">payment</span>
              <span className="text-body-lg font-medium">Payment Methods</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
          </div>
          <div className="bg-surface-container-lowest p-md rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container-low transition-colors text-error mt-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-error">logout</span>
              <span className="text-body-lg font-medium">Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
