'use client';

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  label: string;
}

export default function Editor({
  value,
  onChange,
  readOnly = false,
  placeholder = '',
  label,
}: EditorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
        spellCheck={false}
        className={`w-full h-96 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none ${
          readOnly ? 'bg-gray-50 dark:bg-gray-800/50' : ''
        }`}
      />
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>{value.length.toLocaleString()} characters</span>
        <span>{value.split('\n').length} lines</span>
      </div>
    </div>
  );
}
