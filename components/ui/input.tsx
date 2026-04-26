import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full rounded-md border border-white/10 bg-[var(--color-primary)] px-4 py-3 text-base font-light leading-normal placeholder:text-white/30 outline-none transition-all focus:border-[var(--color-accent)]",
        className
      )}
      {...props}
    />
  );
}

export { Input };