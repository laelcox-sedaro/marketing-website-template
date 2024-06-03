"use client";

import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import React from "react";

export function CopyButton({ text }: { text: string }) {
  const [isShowingTooltip, setIsShowingTooltip] = React.useState(false);
  const handleClick = async () => {
    await navigator.clipboard.writeText(text);
    setIsShowingTooltip(true);
    setTimeout(() => setIsShowingTooltip(false), 2000);
  };

  return (
    <button className="relative" onClick={handleClick}>
      {isShowingTooltip ? (
        <span className="text-grayscale-600 dark:text-grayscale-400 absolute -left-2 -top-2 -translate-y-full transform rounded border border-border bg-surface-secondary p-1 text-xs dark:border-dark-border dark:bg-dark-surface-secondary">
          Copied!
        </span>
      ) : null}
      <ClipboardCopyIcon />
    </button>
  );
}
