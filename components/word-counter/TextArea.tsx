'use client';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextArea({ value, onChange }: TextAreaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor="text-input"
        className="block text-sm font-semibold text-gray-700 dark:text-gray-300"
      >
        Your Text
      </label>
      <textarea
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Start typing or paste your text here…"
        className="w-full h-96 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
        spellCheck="false"
      />
      <p className="text-xs text-gray-500 dark:text-gray-500">
        Your text is processed locally in your browser and is never sent to any server.
      </p>
    </div>
  );
}
