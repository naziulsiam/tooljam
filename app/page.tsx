import Hero from '@/components/Hero';
import ToolCard from '@/components/ToolCard';
import AdSlot from '@/components/AdSlot';
import { TOOLS } from '@/lib/constants';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      <Hero />

      {/* Ad Slot - Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot format="horizontal" className="max-w-4xl mx-auto" />
      </div>

      {/* Featured Tools Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Popular Tools
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Start Using Our Tools
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose from our collection of simple and free tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>
    </div>
  );
}
