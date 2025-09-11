"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen items-center justify-center bg-red-50 text-red-800">
      <div className="text-center">
        <h2 className="text-xl font-bold">Something went wrong!</h2>
        <p className="mt-2">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
