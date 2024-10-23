"use client";

import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { componentPreviewHtml } from "@/utils/transformers";
import Prism from "prismjs";
require("prismjs/components/prism-cshtml");

const ComponentDetails = ({ code }: { code: string }) => {
  const [tab, setTab] = useState<"preview" | "code">("code");

  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <article className="w-full grid grid-cols-[auto_auto] gap-y-4 items-center">
      <h2 className="text-neutral-700">
        title here
      </h2>
      <div className="p-1 bg-neutral-100 rounded w-fit justify-self-end">
        <button
          onClick={() => setTab("preview")}
          type="button"
          className={`py-2 px-3 rounded ${tab === "preview" ? "bg-neutral-200" : "bg-transparent"
            }`}
        >
          Aperçu
        </button>
        <button
          onClick={() => setTab("code")}
          type="button"
          className={`py-2 px-3 rounded ${tab === "code" ? "bg-neutral-200" : "bg-transparent"
            }`}
        >
          Code
        </button>
      </div>

      {/* {tab === "code" ? <SelectStyle /> : null} */}

      <div
        className={`col-span-full h-[600px] ${tab === "code" ? "overflow-x-hidden" : ""}`}
      >
        {tab === "preview" ? (
          <article className="w-full h-full">
            {code ? <TabPreview code={code} /> : <p>Loading...</p>}
          </article>
        ) : (
          <div className="overflow-hidden h-full g-gray-800 ext-gray-100 rounded-lg">
            {code ? <TabCode code={code} /> : <p>Loading...</p>}
          </div>
        )}
      </div>
    </article>
  );
};

const TabPreview = ({ code }: { code: string }) => {
  return (
    <PanelGroup
      className="bg-gray-100 rounded-lg relative order !overflow-visible"
      direction="horizontal"
    >
      <Panel defaultSize={100} minSize={35}>
        <div className="pr-3 pl-5 py-10 w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <iframe className="w-full h-full flex items-center justify-center" srcDoc={componentPreviewHtml(code)}></iframe>
        </div>
      </Panel>
      <PanelResizeHandle className="w-2 h-16 rounded-full bg-gray-300 translate-x-4 translate-y-[230px] hidden md:block" />
      <Panel className="bg-gray-50 rounded-e-lg" defaultSize={0} />
    </PanelGroup>
  );
};

const TabCode = ({ code }: { code: string }) => {
  // TODO: Do we need to change the language?
  const [prismClass, setPrismClass] = useState("language-html");

  return (
    // TODO: prismJS applies some margin and I don't want that
    <pre className="w-full h-full !m-0">
      <code className={prismClass}>{code}</code>
    </pre>
  );
};

const SelectStyle = () => {
  return (
    <div className="">
      <select
        name="style-select"
        className="mt-1.5 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
      >
        <option value="css">CSS</option>
        <option value="tailwind">Tailwind</option>
      </select>
    </div>
  );
};

export default ComponentDetails;
