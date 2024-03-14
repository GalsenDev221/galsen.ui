import { useEffect, useState } from "react";
import { componentPreviewHtml } from "@/utils/transformers";

export default function UIComponentPreview() {
  const [code, setCode] = useState<string | undefined>('')
  useEffect(() => { fetchUiComponent() })

  async function fetchUiComponent() {
    const res = await fetch('/ui/forms/simple.html')
    setCode(await res.text())
  }

  return (
    <section className="mt-8 p-4 border grid grid-cols-2">
      <h2 className="sr-only">Preview + Code</h2>
      <article className="pr-2 overflow-y-auto space-y-4">
        <h3 className="text-center text-neutral-300 font-semibold text-xl">Code HTML</h3>
        {code ? <PreviewCode code={code} /> : <p>Loading...</p>}
      </article>
      <article className="border-l pl-2 overflow-y-auto space-y-4">
        <h3 className="text-center text-neutral-300 font-semibold text-xl">Preview HTML</h3>
        {code ? <PreviewIframe code={code} /> : <p>Loading...</p>}
      </article>
    </section>
  )
}

function PreviewIframe({ code }: { code: string }) {
  return <iframe className="w-full h-screen" srcDoc={componentPreviewHtml(code)}></iframe>
}

function PreviewCode({ code }: { code: string }) {
  return <pre>{code}</pre>
}