import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, Heart, Zap, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ToolJam - Free Online Tools',
  description:
    'Learn about ToolJam, our mission to provide simple, fast, and free online tools for everyone.',
};

export default function AboutPage() {
  const features = [
    {
      icon: Zap,
      title: 'Fast & Simple',
      description: 'No signups, no complexity. Just tools that work instantly.',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your data stays on your device. We don\'t track or store personal information.',
    },
    {
      icon: Heart,
      title: 'Always Free',
      description: 'All tools are completely free to use. No hidden costs or premium tiers.',
    },
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-6 border border-primary-100 dark:border-gray-700">
          <Wrench className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            About Us
          </span>
        </div>
        <h1 className="page-title">About ToolJam</h1>
        <p className="page-description">
          Simple, fast, and free tools for everyday tasks
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {/* Mission */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            ToolJam was created to provide everyone with access to simple, reliable
            online tools without the hassle of signups, subscriptions, or complicated
            interfaces.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            We believe that everyday tools should be free, fast, and easy to use.
            That's why we've built ToolJam - a growing collection of utilities that
            just work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Start Using Our Tools
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Explore our collection of free online tools
          </p>
          <Link href="/tools" className="btn-primary inline-block">
            Browse Tools
          </Link>
        </div>
      </div>
    </div>
  );
}
