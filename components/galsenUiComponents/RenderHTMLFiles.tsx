"use client"
import React from 'react'
import PostPreview from './PostPreview'

function removeHTMLExtension(file: string) {
  return file.split('.html').shift() as string;
}

const RenderHTMLFiles = ({ files, componentSlug, components }: { components: Record<number, { title: string }>; files: string[], componentSlug: string }) => {

  return (
    <div className="mt-8 space-y-12 min-w-0">
      {files.map((file) => {
        const fileKey = removeHTMLExtension(file) as unknown as number;
        const title = components[fileKey].title;
        const componentId = `component-${fileKey}`;

        return (
          <div key={file} id={componentId} className="scroll-mt-8">
            <PostPreview file={file} title={title} componentSlug={componentSlug} />
          </div>
        )
      })}
    </div>
  )
}

export default RenderHTMLFiles
