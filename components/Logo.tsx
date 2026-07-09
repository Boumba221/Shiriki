export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="grid h-7 w-7 place-items-center rounded-md bg-ink text-[15px] font-bold leading-none text-white"
      >
        S
      </span>
      <span className="text-[17px] font-semibold tracking-tight text-ink">
        Shiriki
      </span>
    </div>
  );
}
