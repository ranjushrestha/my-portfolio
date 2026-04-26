import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const el = e.currentTarget;
    el.style.height = "auto"; // reset height
    el.style.height = el.scrollHeight + "px"; // grow
  };

  return (
    <textarea
      rows={2} // small initial height
      onInput={handleInput}
      data-slot="textarea"
      className={cn(
        "w-full resize-none overflow-hidden rounded-md border border-white/10 bg-[var(--color-primary)] px-4 py-3 text-base font-light leading-normal placeholder:text-white/30 outline-none transition-all focus:border-[var(--color-accent)]",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };