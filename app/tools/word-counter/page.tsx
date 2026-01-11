'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, Trash2 } from 'lucide-react';
import { analyzeText } from '@/lib/wordCounter';
import TextArea from '@/components/word-counter/TextArea';
import Stats from '@/components/word-counter/Stats';
import AdSlot from '@/components/AdSlot';

export default function WordCounterPage() {
  const [text, setText] = useState('');
  const stats = analyzeText(text);

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors duration-200"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Tools
      </Link>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-gray-800 rounded-full mb-4 border border-primary-100 dark:border-gray-700">
          <FileText className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            Word Counter
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Word Counter & Character Counter
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Count words, characters, sentences, and paragraphs instantly. Perfect for
          essays, articles, social media posts, and more.
        </p>

        {/* SEO Intro */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Our free online word counter helps you track your writing progress in real-time.
            Whether you're a student working on an essay, a writer crafting an article, or
            a professional preparing a document, this tool provides instant feedback on word
            count, character count, sentence count, and estimated reading time. All processing
            happens locally in your browser for complete privacy.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Stats */}
        <Stats stats={stats} />

        {/* Text Area */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Enter Your Text
            </h2>
            {text && (
              <button
                onClick={handleClear}
                className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
          <TextArea value={text} onChange={setText} />
        </div>

        {/* How to Use */}
        <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            How to Use
          </h3>
          <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
            <li>Type or paste your text into the text area above</li>
            <li>Watch the statistics update automatically as you type</li>
            <li>View word count, character count, sentences, paragraphs, and reading time</li>
            <li>Use the Clear button to start over</li>
            <li>Your text is never sent to any server - all processing happens locally</li>
          </ol>
        </div>

        {/* Use Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              📝 Perfect For
            </h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>✅ Essays and academic papers</li>
              <li>✅ Blog posts and articles</li>
              <li>✅ Social media posts (Twitter, LinkedIn)</li>
              <li>✅ Meta descriptions and titles</li>
              <li>✅ Job applications and cover letters</li>
              <li>✅ Product descriptions</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">
              ⚡ Features
            </h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>✅ Real-time word counting</li>
              <li>✅ Character count with and without spaces</li>
              <li>✅ Sentence and paragraph counting</li>
              <li>✅ Reading time estimation</li>
              <li>✅ Privacy-focused (local processing)</li>
              <li>✅ No registration required</li>
            </ul>
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
