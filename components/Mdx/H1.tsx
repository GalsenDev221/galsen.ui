"use client"
import React from "react"

export default function H1({ children }: { children?: React.ReactNode }) {
  return <h1 className="font-bold text-2xl dark:text-gray-100">{children}</h1>
}