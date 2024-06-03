"use client";

import { useTheme } from "next-themes";
import { Half2Icon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-0.5 rounded-full border border-border bg-surface-primary p-1 text-center dark:border-dark-border dark:bg-dark-surface-primary">
      <SwitchButton selectedTheme={theme} setTheme={setTheme} theme="light">
        <SunIcon color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton selectedTheme={theme} setTheme={setTheme} theme="system">
        <Half2Icon color="currentColor" height={16} width={16} />
      </SwitchButton>
      <SwitchButton selectedTheme={theme} setTheme={setTheme} theme="dark">
        <MoonIcon color="currentColor" height={16} width={16} />
      </SwitchButton>
    </div>
  );
}

function SwitchButton({
  selectedTheme,
  theme,
  setTheme,
  children,
}: {
  selectedTheme?: string;
  theme: string;
  setTheme: (theme: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={clsx(
        "text-gra flex size-5 items-center justify-center rounded-full p-1 text-grayscale-600 dark:text-grayscale-400",
        theme === selectedTheme &&
          "bg-surface-tertiary text-text-primary dark:bg-dark-surface-secondary dark:text-dark-text-primary",
        "hover:bg-surface-secondary hover:text-text-primary dark:hover:bg-dark-surface-secondary dark:hover:text-dark-text-primary",
      )}
      onClick={() => setTheme(theme)}
    >
      {children}
    </button>
  );
}
