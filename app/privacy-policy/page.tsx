import type { Metadata } from 'next';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - ToolJam',
  description:
    'ToolJam Privacy Policy - Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-6 border border-primary-100 dark:border-gray-700">
          <Shield className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Your Privacy Matters
          </span>
        </div>

        <h1 className="page-title">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Last updated: January 2026
        </p>
      </div>

      <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
        <div className="card space-y-6 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to ToolJam. We respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we
              handle information when you use our website and tools.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              2. Data We Collect
            </h2>
            <p className="leading-relaxed mb-3">
              ToolJam is designed with privacy in mind. We collect minimal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Usage Data:</strong> We may collect anonymous analytics
                data to improve our services (page views, tool usage, etc.)
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies for essential website
                functionality and analytics
              </li>
              <li>
                <strong>Local Storage:</strong> Some tools may store preferences
                locally in your browser
              </li>
            </ul>
            <p className="leading-relaxed mt-3">
              <strong>Important:</strong> Tool calculations (age calculator,
              currency converter, etc.) are processed in your browser. We do not
              collect, store, or transmit your input data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              3. Third-Party Services
            </h2>
            <p className="leading-relaxed mb-3">
              We use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Google AdSense:</strong> We display advertisements through
                Google AdSense. Google may use cookies to serve ads based on your
                prior visits to our website or other websites.
              </li>
              <li>
                <strong>Currency Exchange API:</strong> Our currency converter
                uses a third-party API to fetch exchange rates. No personal data
                is sent to this service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              4. Cookies
            </h2>
            <p className="leading-relaxed">We use cookies for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remembering your theme preference (light/dark mode)</li>
              <li>Analytics and improving our services</li>
              <li>Advertising through Google AdSense</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              5. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your data.
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of cookies and tracking</li>
              <li>Opt out of personalized advertising</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p className="leading-relaxed">
              ToolJam is not intended for children under 13. We do not knowingly
              collect personal information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this privacy policy from time to time. Changes will
              be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              9. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have questions about this privacy policy, please contact us
              at{' '}
              <a
                href="mailto:privacy@tooljam.com"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                privacy@tooljam.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

