"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex h-screen items-center justify-center bg-red-50 text-red-800">
        <div>
          <h2>Something went wrong!</h2>
          <button
            onClick={() => reset()}
            className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
