import React from 'react';
import {
  Globe,
  Layers,
  Cpu,
  GitFork,
  Wrench,
  ScanFace,
  MessageSquareCode,
  Mic,
  FileSearch,
  Sparkles,
  Network,
  Compass,
  Layout,
  Code2,
  Rocket,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Cpu,
  GitFork,
  Wrench,
  ScanFace,
  MessageSquareCode,
  Mic,
  FileSearch,
  Sparkles,
  Network,
  Compass,
  Layout,
  Code2,
  Rocket,
};

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconRenderer: React.FC<IconRendererProps> = ({ name, className = 'w-5 h-5', size }) => {
  const IconComponent = iconMap[name] || Code2;
  return <IconComponent className={className} size={size} />;
};
