interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`card-quiet rounded-[2px] ${className}`}>{children}</div>
  );
}
