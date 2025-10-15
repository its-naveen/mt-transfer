type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export default function ErrorFallback({ error, resetErrorBoundary}: ErrorFallbackProps) {
  return (
    <div>
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};