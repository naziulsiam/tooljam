'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Type } from 'lucide-react';
import { convertCase, CaseType } from '@/lib/caseConverter';
import TextArea from '@/components/case-converter/TextArea';
import Actions from '@/components/case-converter/Actions';
import AdSlot from '@/components/AdSlot';

export default function CaseConverterPage() {
  const [text, setText] = useState('');

  const handleConvert = (caseType: CaseType) => {
    const converted = convertCase(text, caseType);
    setText(converted);
  };

  const handleClear = () => {
    setText('');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const hasText = text.trim().length > 0;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
          <Type className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Case Converter
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Case Converter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Convert text to uppercase, lowercase, title case, sentence case, and more
          with one click.
        </p>

        {/* SEO Intro */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Our free online case converter helps you transform text between different
            letter cases instantly. Whether you need to convert text to uppercase for
            headlines, lowercase for coding, title case for documents, or explore
            creative text styles like alternating case, this tool makes it easy.
            Perfect for writers, students, developers, and content creators.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Text Area - Takes 2 columns */}
        <div className="lg:col-span-2">
          <div className="card">
            <TextArea value={text} onChange={setText} />
          </div>
        </div>

        {/* Actions - Takes 1 column */}
        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <Actions
              onConvert={handleConvert}
              onClear={handleClear}
              onCopy={handleCopy}
              hasText={hasText}
            />
          </div>
        </div>
      </div>

      {/* How to Use */}
      <div className="mt-8 card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Type className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          How to Use
        </h3>
        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
          <li>Type or paste your text into the text area</li>
          <li>Click on any case conversion button to transform your text</li>
          <li>The text will be converted instantly</li>
          <li>Use the Copy button to copy the result to your clipboard</li>
          <li>Click Clear to start over with new text</li>
        </ol>
      </div>

      {/* Case Types Info */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            UPPERCASE
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Converts all letters to uppercase.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            HELLO WORLD
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            lowercase
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Converts all letters to lowercase.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            hello world
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Title Case
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Capitalizes the first letter of each word.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            Hello World
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            Sentence case
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Capitalizes the first letter of each sentence.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            Hello world. This is a test.
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            aLtErNaTiNg CaSe
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Alternates between lowercase and uppercase.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            hElLo WoRlD
          </div>
        </div>

        <div className="card">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">
            InVeRsE cAsE
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Swaps uppercase with lowercase and vice versa.
          </p>
          <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
            hELLO wORLD
          </div>
        </div>
      </div>

      {/* Ad Slot - Bottom */}
      <div className="mt-8">
        <AdSlot format="horizontal" />
      </div>
    </div>
  );
}
