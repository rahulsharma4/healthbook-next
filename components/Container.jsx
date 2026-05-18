import { cn } from "@/lib/utils";

export function Container({ children, className }) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[min(100%,92rem)] px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
