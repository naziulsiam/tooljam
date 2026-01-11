'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Lock, AlertCircle, Shield } from 'lucide-react';
import {
  generatePassword,
  calculatePasswordStrength,
  getDefaultOptions,
  validateOptions,
  PasswordOptions,
} from '@/lib/password';
import Controls from '@/components/password-generator/Controls';
import Output from '@/components/password-generator/Output';
import AdSlot from '@/components/AdSlot';

export default function PasswordGeneratorPage() {
  const [options, setOptions] = useState<PasswordOptions>(getDefaultOptions());
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Generate initial password
  useEffect(() => {
    handleGenerate();
  }, []);

  const handleGenerate = () => {
    setError('');

    const validation = validateOptions(options);
    if (!validation.valid) {
      setError(validation.error || 'Invalid options');
      setPassword('');
      return;
    }

    try {
      const newPassword = generatePassword(options);
      setPassword(newPassword);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate password');
      setPassword('');
    }
  };

  const handleOptionsChange = (newOptions: PasswordOptions) => {
    setOptions(newOptions);
    setError('');
  };

  const strength = password
    ? calculatePasswordStrength(password, options)
    : 'weak';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
          <Lock className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Password Generator
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Strong Password Generator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Create secure, random passwords instantly. Customize length and character
          types to meet your security requirements.
        </p>
        
        {/* SEO Text */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-2xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Use our free password generator to create strong, unique passwords for your
            online accounts. Our tool uses cryptographically secure random generation
            to ensure maximum security. Customize password length and include uppercase,
            lowercase, numbers, and symbols for optimal protection.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Controls */}
        <div className="card">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Customize Password
          </h2>
          <Controls options={options} onOptionsChange={handleOptionsChange} />
          <button onClick={handleGenerate} className="btn-primary w-full mt-6">
            Generate Password
          </button>
        </div>

        {/* Output */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Generated Password
            </h2>
            
            {error && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl mb-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-700 dark:text-red-400">{error}</p>
                </div>
              </div>
            )}

            <Output
              password={password}
              strength={strength}
              onRegenerate={handleGenerate}
            />
          </div>
        </div>
      </div>

      {/* Security Tips */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          Password Security Tips
        </h3>
        <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
          <li>✅ Use unique passwords for each account</li>
          <li>✅ Aim for at least 12 characters for strong security</li>
          <li>✅ Include a mix of uppercase, lowercase, numbers, and symbols</li>
          <li>✅ Never share your passwords with anyone</li>
          <li>✅ Consider using a password manager to store passwords securely</li>
          <li>✅ Change passwords regularly, especially for sensitive accounts</li>
        </ul>
      </div>

      {/* Ad Slot - Bottom */}
      <div className="mt-8">
        <AdSlot format="horizontal" />
      </div>
    </div>
  );
}
