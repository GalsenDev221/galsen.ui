'use client'
import React, { useEffect, useState } from 'react'
import ComponentDetails from './ComponentDetails'

const PostPreview = ({ file, componentSlug }: { file: string, componentSlug: string }) => {
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
    <div>
      <ComponentDetails code={code} />
    </div>
  )
}

export default PostPreview
