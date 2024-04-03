"use client";

import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { componentPreviewHtml } from "@/utils/transformers";
import Prism from 'prismjs';
import { removeExtension } from "@/utils";
require('prismjs/components/prism-cshtml');

type PropsType = {
  title: string;
  file: string;
  category: string;
};

const ComponentDetails = ({ title, file, category }: PropsType) => {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const [code, setCode] = useState<string | undefined>("");
  useEffect(() => {
    Prism.highlightAll();
    fetchUiComponent();
  });

  async function fetchUiComponent() {
    const res = await fetch(`/ui/${category}/${file}`);
    setCode(await res.text());
  }

  return (
    <article className="w-full grid grid-cols-[auto_auto] gap-y-4 items-center">
      <h2 className="text-neutral-700">{removeExtension(".html", file).toUpperCase()}</h2>
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

      {/* TODO: use aspect-ratio to center the handle */}
      {/* // TODO: work on this to have a better display  */}
      <div
        className={`col-span-full h-[600px] ${tab === "code" ? "overflow-x-hidden" : ""}`}
      >
        {tab === "preview" ? (
          <article className="w-full h-full">
            {code ? <TabPreview code={code} /> : (
              <p>Loading...</p>
            )}
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

// TODO: need to use child components for Preview and Code
const TabPreview = ({ code }: { code: string }) => {
  return (
    <PanelGroup
      className="bg-gray-100 rounded-lg relative !overflow-visible"
      direction="horizontal"
    >
      {/* TODO: make this pane fill the empty widht left by the ResizeHandle */}
      <Panel defaultSize={100} minSize={35}>
        <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <iframe
            className="w-full h-full flex items-center justify-center"
            srcDoc={componentPreviewHtml(code)}
          ></iframe>
        </div>
      </Panel>
      {/* TODO: hide the handle on smaller screen */}
      <PanelResizeHandle className="w-2 h-16 rounded-full bg-gray-400 translate-x-3 translate-y-[230px]" />
      <Panel className="bg-gray-50 rounded-e-lg" defaultSize={0} />
    </PanelGroup>
  );
};

const TabCode = ({ code }: { code: string }) => {
  // TODO: Do we need to change the language?
  const [prismClass, setPrismClass] = useState('language-html');

  return (
    // NOTE: prismJS applies some margin and I don't want that
    <pre className="w-full h-full !m-0">
      <code className={prismClass}>{code}</code>
    </pre>
  );
};

export default ComponentDetails;
