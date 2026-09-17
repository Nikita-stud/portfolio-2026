import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-32 text-center">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="font-medium underline">
        Go back home
      </Link>
    </div>
  );
}
