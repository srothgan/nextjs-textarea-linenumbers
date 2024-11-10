// TextAreaWithLineNumbers.tsx
import React, { useRef, useEffect } from "react";

interface TextareaProps {
  fileContent: string;
  onContentChange: (value: string) => void;
  lineNumbersVisible: boolean;
}

export default function Textarea({
  fileContent,
  onContentChange,
  lineNumbersVisible,
}: TextareaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const lineNumberRef = useRef<HTMLDivElement | null>(null);
  const [lineNumbers, setLineNumbers] = React.useState<number[]>([]);

  const calculateLineNumbers = () => {
    if (textAreaRef.current) {
      const text = textAreaRef.current.value;
      const lines = text.split(/\r\n|\r|\n/);

      const computedStyle = window.getComputedStyle(textAreaRef.current);
      const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
      const font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;

      const usableWidth = textAreaRef.current.clientWidth - paddingLeft - paddingRight;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.font = font;
      }

      const updatedLineNumbers: number[] = [];

      lines.forEach((line, index) => {
        let lineWidth = 0;
        let wrappedLines = 1;

        if (ctx) {
          for (let char of line) {
            lineWidth += ctx.measureText(char).width;
            if (lineWidth > usableWidth) {
              wrappedLines += 1;
              lineWidth = ctx.measureText(char).width;
            }
          }
        }

        updatedLineNumbers.push(index + 1);
        for (let i = 1; i < wrappedLines; i++) {
          updatedLineNumbers.push(0);
        }
      });

      setLineNumbers(updatedLineNumbers);
    }
  };

  const handleScroll = () => {
    if (textAreaRef.current && lineNumberRef.current) {
      lineNumberRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  useEffect(() => {
    calculateLineNumbers();
    if (textAreaRef.current && lineNumberRef.current) {
      lineNumberRef.current.scrollTop = textAreaRef.current.scrollTop;
    }
  }, [fileContent, lineNumbersVisible]);

  return (
    <div className="flex w-full border-2 border-gray-700 max-w-3xl" style={{ maxHeight: "400px", overflow: "hidden" }}>
      {lineNumbersVisible && (
        <div
          ref={lineNumberRef}
          className="w-10 flex items-start flex-col border-r-2 border-slate-300 p-2 overflow-y-auto select-none"
          style={{ maxHeight: "400px" }}
        >
          {lineNumbers.map((line, index) => (
            <div key={index} className="text-right text-gray-500">
              {line === 0 ? <p className="text-white">0</p> : line}
            </div>
          ))}
        </div>
      )}
      <textarea
        ref={textAreaRef}
        value={fileContent}
        onChange={(e) => onContentChange(e.target.value)}
        onScroll={handleScroll}
        placeholder="Enter text..."
        rows={15}
        className="w-full flex-grow p-2 resize-none rounded-none overflow-y-auto"
        style={{ maxHeight: "400px" }}
      />
    </div>
  );
}
