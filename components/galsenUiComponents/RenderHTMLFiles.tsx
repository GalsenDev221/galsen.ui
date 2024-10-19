"use client"
import React from 'react'
import PostPreview from './PostPreview'

const RenderHTMLFiles = ({ files, componentSlug }: { files: string[], componentSlug: string }) => {
  return (
    <div>
      {
        files.map((file) => <PostPreview key={file} file={file} componentSlug={componentSlug} />)
      }
    </div>
  )
}

export default RenderHTMLFiles