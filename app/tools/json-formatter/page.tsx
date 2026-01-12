'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Braces, AlertCircle, CheckCircle2, Info } from 'lucide-react';
import {
  formatJson,
  minifyJson,
  validateJson,
  getSampleJson,
  formatBytes,
  calculateSizeReduction,
} from '@/lib/json';
import Editor from '@/components/json-formatter/Editor';
import Actions from '@/components/json-formatter/Actions';
import AdSlot from '@/components/AdSlot';

export default function JsonFormatterPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [message, setMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const clearMessage = () => {
    setTimeout(() => setMessage(null), 5000);
  };

  const handleFormat = () => {
    const result = formatJson(input);
    
    if (result.success && result.output) {
      setOutput(result.output);
      setMessage({
        type: 'success',
        text: 'JSON formatted successfully!',
      });
      clearMessage();
    } else {
      setOutput('');
      setMessage({
        type: 'error',
        text: result.error || 'Failed to format JSON',
      });
      clearMessage();
    }
  };

  const handleMinify = () => {
    const result = minifyJson(input);
    
    if (result.success && result.output) {
      setOutput(result.output);
      const reduction = calculateSizeReduction(input, result.output);
      setMessage({
        type: 'success',
        text: `JSON minified successfully! Size reduced by ${reduction}%`,
      });
      clearMessage();
    } else {
      setOutput('');
      setMessage({
        type: 'error',
        text: result.error || 'Failed to minify JSON',
      });
      clearMessage();
    }
  };

  const handleValidate = () => {
    const result = validateJson(input);
    
    if (result.valid) {
      setMessage({
        type: 'success',
        text: '✓ Valid JSON!',
      });
      clearMessage();
    } else {
      setMessage({
        type: 'error',
        text: result.error || 'Invalid JSON',
      });
      clearMessage();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setMessage({
        type: 'success',
        text: 'Copied to clipboard!',
      });
      setTimeout(() => {
        setCopied(false);
        setMessage(null);
      }, 2000);
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Failed to copy to clipboard',
      });
      clearMessage();
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setMessage(null);
  };

  const handleLoadSample = () => {
    setInput(getSampleJson());
    setOutput('');
    setMessage({
      type: 'info',
      text: 'Sample JSON loaded. Click Format to see the result.',
    });
    clearMessage();
  };

  const inputSize = new Blob([input]).size;
  const outputSize = new Blob([output]).size;

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
          <Braces className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
            JSON Formatter
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
          JSON Formatter & Validator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
          Format, validate, and minify JSON instantly. Perfect for developers working
          with APIs, configuration files, and data structures.
        </p>

        {/* SEO Intro */}
        <div className="card bg-primary-50 dark:bg-primary-900/20 border-primary-100 dark:border-primary-800 text-left max-w-3xl mx-auto">
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Our free online JSON formatter helps you beautify, validate, and minify JSON
            data with ease. Whether you're debugging API responses, cleaning up configuration
            files, or preparing JSON for production, this tool provides instant formatting
            and validation. All processing happens locally in your browser for complete
            privacy and security.
          </p>
        </div>
      </div>

      {/* Ad Slot - Top */}
      <div className="mb-8">
        <AdSlot format="horizontal" />
      </div>

      {/* Message Display */}
      {message && (
        <div
          className={`card mb-6 animate-in fade-in slide-in-from-top-2 duration-300 ${
            message.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
              : message.type === 'error'
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
          }`}
        >
          <div className="flex items-start gap-3">
            {message.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
            ) : message.type === 'error' ? (
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            )}
            <p
              className={`text-sm ${
                message.type === 'success'
                  ? 'text-green-700 dark:text-green-300'
                  : message.type === 'error'
                  ? 'text-red-700 dark:text-red-300'
                  : 'text-blue-700 dark:text-blue-300'
              }`}
            >
              {message.text}
            </p>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="card mb-8">
        <Actions
          onFormat={handleFormat}
          onMinify={handleMinify}
          onValidate={handleValidate}
          onCopy={handleCopy}
          onClear={handleClear}
          onLoadSample={handleLoadSample}
          hasInput={input.trim().length > 0}
          hasOutput={output.trim().length > 0}
        />
      </div>

      {/* Editors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Input */}
        <div className="card">
          <Editor
            value={input}
            onChange={setInput}
            placeholder="Paste your JSON here…"
            label="Input JSON"
          />
          {input && (
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
              Size: {formatBytes(inputSize)}
            </div>
          )}
        </div>

        {/* Output */}
        <div className="card">
          <Editor
            value={output}
            onChange={() => {}}
            readOnly
            placeholder="Output will appear here…"
            label="Output JSON"
          />
          {output && (
            <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">
              Size: {formatBytes(outputSize)}
            </div>
          )}
        </div>
      </div>

      {/* How to Use */}
      <div className="card bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800 mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          How to Use
        </h3>
        <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2 list-decimal list-inside">
          <li>Paste your JSON data into the input area</li>
          <li>Click <strong>Format</strong> to beautify and indent your JSON</li>
          <li>Click <strong>Minify</strong> to compress your JSON (removes whitespace)</li>
          <li>Click <strong>Validate</strong> to check if your JSON is valid</li>
          <li>Use <strong>Copy Output</strong> to copy the formatted/minified result</li>
          <li>Click <strong>Load Sample</strong> to see an example</li>
        </ol>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            🛠️ Features
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>✅ Format and beautify JSON</li>
            <li>✅ Minify JSON for production</li>
            <li>✅ Validate JSON syntax</li>
            <li>✅ Show character and line counts</li>
            <li>✅ Display file sizes</li>
            <li>✅ Copy formatted output</li>
            <li>✅ Load sample JSON</li>
          </ul>
        </div>

        <div className="card bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800">
          <h3 className="font-bold text-gray-900 dark:text-white mb-3">
            🔒 Privacy & Security
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>✅ All processing happens in your browser</li>
            <li>✅ No data is sent to any server</li>
            <li>✅ Your JSON stays completely private</li>
            <li>✅ Works offline after initial load</li>
            <li>✅ No registration or login required</li>
          </ul>
        </div>
      </div>

      {/* Ad Slot - Bottom */}
      <div className="mt-8">
        <AdSlot format="horizontal" />
      </div>
    </div>
  );
}
