import { Metadata } from 'next';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import { TOOLS } from '@/lib/constants';
import { Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Tools - ToolJam',
  description: 'Browse all free online tools on ToolJam. Age calculator, currency converter, and more.',
};

export default function ToolsPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-6 border border-primary-100 dark:border-gray-700">
          <Wrench className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            All Tools
          </span>
        </div>
        <h1 className="page-title">Our Tool Collection</h1>
        <p className="page-description">
          Discover all the free tools we have to offer
        </p>
      </div>

      {/* Ad Slot */}
      <div className="mb-12">
        <AdSlot format="horizontal" className="max-w-4xl mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </div>
  );
}
