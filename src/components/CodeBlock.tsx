"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

export function CodeBlock({ children, className, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const getCodeText = (node: React.ReactNode): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getCodeText).join("");
    if (node && typeof node === "object" && "props" in node) {
      const element = node as { props: { children?: React.ReactNode } };
      return getCodeText(element.props.children);
    }
    return "";
  };

  const handleCopy = async () => {
    const text = getCodeText(children);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      {/* 言語ラベル */}
      {language && (
        <div className="absolute top-0 left-4 px-2 py-1 text-xs font-mono text-slate-400 bg-slate-700 rounded-b">
          {language}
        </div>
      )}

      {/* コピーボタン */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-slate-700 hover:bg-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="コードをコピー"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-slate-400" />
        )}
      </button>

      {/* コードブロック */}
      <pre className="bg-slate-800 rounded-lg p-4 pt-8 overflow-x-auto">
        <code className={`text-sm text-slate-100 ${className || ""}`}>
          {children}
        </code>
      </pre>
    </div>
  );
}
