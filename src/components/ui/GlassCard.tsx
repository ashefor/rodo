interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div className={`glass rounded-3xl shadow-ambient ${className}`}>
      {children}
    </div>
  );
}
