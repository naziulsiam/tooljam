'use client';

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextArea({
  value,
  onChange,
  placeholder = 'Paste or type your text here…',
}: TextAreaProps) {
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
        placeholder={placeholder}
        className="w-full h-64 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
        spellCheck="false"
      />
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>Characters: {value.length.toLocaleString()}</span>
        <span>Your text is processed locally and never sent to any server</span>
      </div>
    </div>
  );
}
