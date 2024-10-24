'use client'
import React, { useEffect, useState } from 'react'
import ComponentDetails from './ComponentDetails'

const PostPreview = ({ file, componentSlug, title }: { title: string; file: string, componentSlug: string }) => {
  const [code, setCode] = useState<string>("")

  useEffect(() => {
    fetchCode()
  })

  async function fetchCode() {
    const fetchResponse = await fetch(`/components/${componentSlug}/${file}`)
    const textResponse = await fetchResponse.text()

    setCode(textResponse)
  }
  return (
    <ComponentDetails code={code} title={title} />
  )
}

export default PostPreview
