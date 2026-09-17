"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        An unexpected error occurred.
      </p>
      <button type="button" onClick={reset} className="font-medium underline">
        Try again
      </button>
    </div>
  );
}
