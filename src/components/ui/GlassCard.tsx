interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${className}`}
    >
      {children}
    </div>
  );
}
