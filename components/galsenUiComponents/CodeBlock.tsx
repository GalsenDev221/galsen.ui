"use client";

import { useState, useEffect } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-cshtml");

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "html" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative w-full h-full min-w-0 bg-[#282a36] rounded-lg overflow-hidden">
      {/* Header with copy button */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
        <span className="text-xs text-gray-400 font-mono uppercase">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          className={`
            flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium
            transition-all duration-200
            ${
              copied
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }
          `}
        >
          {copied ? (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Copié !</span>
            </>
          ) : (
            <>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copier</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="w-full h-[calc(100%-52px)] !m-0 overflow-auto p-4">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
