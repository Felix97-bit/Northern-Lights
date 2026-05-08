export default function AuroraDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center my-16 ${className}`} aria-hidden="true">
      <div className="aurora-divider" />
    </div>
  );
}
