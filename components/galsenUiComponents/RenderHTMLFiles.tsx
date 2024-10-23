"use client"
import React from 'react'
import PostPreview from './PostPreview'

const RenderHTMLFiles = ({ files, componentSlug }: { files: string[], componentSlug: string }) => {
  return (
    <div className="mt-4">
      {/* {files.map((file) => <PostPreview key={file} file={file} componentSlug={componentSlug} />)} */}
      <PostPreview key={files[0]} file={files[0]} componentSlug={componentSlug} />
    </div>
  )
}

export default RenderHTMLFiles
