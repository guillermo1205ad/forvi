import React from 'react';
import {
  ChartColumn,
  BarChart3,
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
  ArrowRight, ArrowUpRight, ArrowDown, ArrowUp, Check, Menu, X, Linkedin, Instagram, Facebook, MessageSquare,
  Copy, CheckCheck,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  ArrowRight, ArrowUpRight, ArrowDown, ArrowUp, Check, Menu, X, Linkedin, Instagram, Facebook, MessageSquare,
  Copy, CheckCheck,
  ChartColumn,
  BarChart3,
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
  return <IconComponent aria-hidden="true" className={className} size={size} />;
};
