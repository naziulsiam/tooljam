import type { Metadata } from 'next';
import { MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact ToolJam',
  description: 'Get in touch with the ToolJam team.',
};

export default function ContactPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-6 border border-primary-100 dark:border-gray-700">
          <MessageSquare className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Contact Us
          </span>
        </div>

        <h1 className="page-title">Get in Touch</h1>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          We'd love to hear from you
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="card space-y-4 text-gray-700 dark:text-gray-300">
          <p>
            If you have feedback, suggestions, or business inquiries, feel free
            to reach out.
          </p>

          <p>
            Email us at{' '}
            <a
              href="mailto:contact@tooljam.com"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              contact@tooljam.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

