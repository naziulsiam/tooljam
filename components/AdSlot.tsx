'use client';

interface AdSlotProps {
  slot?: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

/**
 * AdSense-ready placeholder component
 * Replace with actual AdSense code when ready to monetize
 */
export default function AdSlot({ 
  slot = 'placeholder', 
  format = 'auto',
  className = '' 
}: AdSlotProps) {
  // This is a placeholder - replace with actual AdSense code when ready
  const isProduction = process.env.NODE_ENV === 'production';
  
  // Don't show ads in development
  if (!isProduction) {
    return (
      <div className={`bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-4 text-center ${className}`}>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          📢 Ad Slot Placeholder ({format})
        </p>
      </div>
    );
  }

  // In production, this is where you'd add actual AdSense code:
  // Example:
  // <ins className="adsbygoogle"
  //      style={{ display: 'block' }}
  //      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  //      data-ad-slot={slot}
  //      data-ad-format={format}>
  // </ins>

  return null;
}
