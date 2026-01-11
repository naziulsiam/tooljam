import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - ToolJam',
  description: 'Terms and conditions for using ToolJam.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="card space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Terms of Service
        </h1>

        <section>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            By accessing or using ToolJam, you agree to be bound by these Terms
            of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Use of Service</h2>
          <p className="leading-relaxed">
            ToolJam provides free online tools for informational purposes only.
            You agree not to misuse or abuse the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Disclaimer</h2>
          <p className="leading-relaxed">
            All tools are provided “as is” without warranties of any kind.
            ToolJam is not responsible for inaccuracies or damages.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Termination</h2>
          <p className="leading-relaxed">
            We may suspend or terminate access to ToolJam at any time without
            notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <p className="leading-relaxed">
            Questions? Email{' '}
            <a
              href="mailto:legal@tooljam.com"
              className="text-primary-600 hover:underline"
            >
              legal@tooljam.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}

