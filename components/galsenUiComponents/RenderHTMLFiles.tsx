"use client"
import React from 'react'
import PostPreview from './PostPreview'

function removeHTMLExtension(file: string) {
  return file.split('.html').shift()
}

// PERF: use better names for these props (specially `titles`)
const RenderHTMLFiles = ({ files, componentSlug, titles }: { titles: string[]; files: string[], componentSlug: string }) => {
  return (
    <div className="mt-8 space-y-12">
      {files.map((file) => {
        const title = titles[removeHTMLExtension(file)].title

        return (
          <PostPreview key={file} file={file} title={title} componentSlug={componentSlug} />
        )
      })}
    </div>
  )
}

export default RenderHTMLFiles
