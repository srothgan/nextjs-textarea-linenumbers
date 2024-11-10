"use client";
import { useState } from "react";
import Textarea from "@/components/Textarea";

export default function Home() {
  const [fileContent, setFileContent] = useState<string>("");
  const [lineNumbersVisible, setLineNumbersVisible] = useState<boolean>(true);

  const handleToggleLineNumbers = () => {
    setLineNumbersVisible(!lineNumbersVisible);
  };

  return (
    <div className="flex flex-col p-8 items-center justify-center w-full max-w-3xl mx-auto">
      <div className="w-full flex flex-row items-start">
        <button
          onClick={handleToggleLineNumbers}
          type="button"
          className="px-4 py-2 rounded bg-slate-200 mb-4 hover:bg-slate-600 hover:text-white"
        >
          Toggle Line Numbers
        </button>
      </div>
      <Textarea
        fileContent={fileContent}
        onContentChange={setFileContent}
        lineNumbersVisible={lineNumbersVisible}
      />
    </div>
  );
}
