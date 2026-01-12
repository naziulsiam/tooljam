'use client';

import { Wand2, Minimize2, CheckCircle, Copy, Trash2, FileJson } from 'lucide-react';

interface ActionsProps {
  onFormat: () => void;
  onMinify: () => void;
  onValidate: () => void;
  onCopy: () => void;
  onClear: () => void;
  onLoadSample: () => void;
  hasInput: boolean;
  hasOutput: boolean;
  disabled?: boolean;
}

export default function Actions({
  onFormat,
  onMinify,
  onValidate,
  onCopy,
  onClear,
  onLoadSample,
  hasInput,
  hasOutput,
  disabled = false,
}: ActionsProps) {
  return (
    <div className="space-y-4">
      {/* Primary Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={onFormat}
          disabled={!hasInput || disabled}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Wand2 className="w-4 h-4" />
          Format
        </button>
        <button
          onClick={onMinify}
          disabled={!hasInput || disabled}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Minimize2 className="w-4 h-4" />
          Minify
        </button>
        <button
          onClick={onValidate}
          disabled={!hasInput || disabled}
          className="btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <CheckCircle className="w-4 h-4" />
          Validate
        </button>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={onCopy}
          disabled={!hasOutput || disabled}
          className="btn-secondary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Copy className="w-4 h-4" />
          Copy Output
        </button>
        <button
          onClick={onClear}
          disabled={!hasInput || disabled}
          className="btn-secondary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 className="w-4 h-4" />
          Clear
        </button>
        <button
          onClick={onLoadSample}
          disabled={disabled}
          className="btn-secondary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FileJson className="w-4 h-4" />
          Load Sample
        </button>
      </div>
    </div>
  );
}
