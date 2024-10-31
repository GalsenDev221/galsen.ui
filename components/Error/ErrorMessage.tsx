import React from "react";

interface ErrorMessageProps {
  message: string;
  title?: string;
  className?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const ErrorMessage = ({
  message,
  title,
  className = "",
  dismissible = false,
  onDismiss,
}: ErrorMessageProps) => {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleDismiss = React.useCallback(() => {
    setIsVisible(false);
    onDismiss?.();
  }, [onDismiss]);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      className={`
        bg-red-50 
        border-l-4 
        border-red-500 
        p-4 
        rounded-r-lg
        shadow-sm
        my-4
        relative
        transform
        transition-all
        duration-300
        hover:shadow-md
        ${className}
      `}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg
            className="h-5 w-5 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium text-red-800">{title}</h3>
          )}
          <div className={`text-sm text-red-700 ${title ? "mt-1" : ""}`}>
            {message}
          </div>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700 transition-colors"
            aria-label="Fermer le message d'erreur"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
