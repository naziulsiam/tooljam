import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export default function ToolCard({
  title,
  description,
  icon,
  href,
  color,
}: ToolCardProps) {
  const Icon = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Wrench;

  return (
    <Link href={href}>
      <div className="card-interactive group">
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 shadow-soft`}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}
