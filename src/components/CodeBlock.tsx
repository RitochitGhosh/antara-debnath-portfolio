import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative mt-4">
      <Highlight theme={themes.vsDark} code={code} language={language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="bg-[#1e1e1e] text-white p-4 rounded-md overflow-x-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <button
        className={`absolute top-2 right-2 text-sm px-2 py-1 rounded transition-colors ${
          copied
            ? "bg-green-500 text-white"
            : "bg-gray-800/50 text-gray-400 hover:text-white"
        }`}
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
} 