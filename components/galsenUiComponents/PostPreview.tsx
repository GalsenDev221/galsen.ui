'use client'
import React, { useEffect, useState } from 'react'
import ComponentDetails from './ComponentDetails'
import { componentPreviewHtml } from '@/utils/transformers'

const PostPreview = ({ file, componentSlug }: { file: string, componentSlug: string }) => {
  const [htmlCode, setHtmlCode] = useState<string>("")

  useEffect(() => {
    fetchHtml()
  })

  async function fetchHtml() {

    const componentUrl = `/components/${componentSlug}/${file}`

    const fetchResponse = await fetch(componentUrl)
    const textResponse = await fetchResponse.text()
    const transformedHtml = componentPreviewHtml(textResponse)

    setHtmlCode(transformedHtml)
  }
  return (
    <div>
      <ComponentDetails code={htmlCode} />
    </div>
  )
}

export default PostPreview