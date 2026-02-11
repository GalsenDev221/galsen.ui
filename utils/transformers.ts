// NOTE: shamelessly copied from https://github.com/markmead/hyperui/blob/main/src/utils/transformers.js
// TODO: remove unneeded transformers
export function componentPreviewHtml(
  componentHtml: string,
  componentContainer = 'relative',
  isDarkMode = false,
  isRtl = false
) {
  const htmlClass = isDarkMode ? 'dark' : 'relative'
  const htmlDirection = isRtl ? 'rtl' : 'ltr'

  return `
    <html class="${htmlClass}" dir="${htmlDirection}">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            darkMode: 'class',
          }
        </script>
        <style>
          .dark body {
            background-color: #111827;
            color: #f3f4f6;
          }
          .dark table {
            color: #f3f4f6;
          }
          .dark thead {
            background-color: #1f2937;
          }
          .dark th {
            color: #e5e7eb !important;
          }
          .dark td {
            color: #d1d5db !important;
          }
          .dark .divide-neutral-200 > :not([hidden]) ~ :not([hidden]) {
            border-color: #4b5563;
          }
          .dark .divide-y-2 > :not([hidden]) ~ :not([hidden]) {
            border-color: #4b5563;
          }
          .dark .border-gray-300, .dark .border-neutral-300 {
            border-color: #4b5563;
          }
          .dark .bg-white {
            background-color: #1f2937;
          }
          .dark .bg-neutral-200 {
            background-color: #374151;
          }
          .dark .bg-slate-50, .dark .bg-gray-50,
          .dark [class*="bg-slate-50"],
          .dark [class*="bg-gray-50"] {
            background-color: #1f2937 !important;
          }
          .dark input:disabled {
            background-color: transparent !important;
            color: #9ca3af;
          }
          .dark button:hover {
            background-color: #374151 !important;
          }
          .dark .text-neutral-500 {
            color: #9ca3af !important;
          }
          .dark input[type="checkbox"] {
            background-color: #374151;
            border-color: #6b7280;
          }
          .dark input:not([type="checkbox"]):not([type="radio"]),
          .dark textarea,
          .dark select {
            background-color: #1f2937;
            color: #f3f4f6;
            border-color: #4b5563;
          }
          .dark select option {
            background-color: #1f2937;
            color: #f3f4f6;
          }
          .dark input::placeholder,
          .dark textarea::placeholder {
            color: #9ca3af;
          }
          .dark label {
            color: #9ca3af;
          }
          .dark .text-neutral-900 {
            color: #f3f4f6 !important;
          }
          .dark .text-gray-700 {
            color: #d1d5db !important;
          }
          .dark .text-gray-800 {
            color: #e5e7eb !important;
          }
          .dark .bg-neutral-50 {
            background-color: #111827;
          }
          .dark .bg-gray-50 {
            background-color: #1f2937;
          }
          .dark .min-h-screen.bg-white {
            background-color: #111827;
          }
          .dark .border-gray-200 {
            border-color: #4b5563;
          }
          .dark .border-neutral-900 {
            border-color: #6b7280;
          }
          .dark .text-gray-900 {
            color: #f3f4f6 !important;
          }
        </style>
      </head>

      <body class="${componentContainer} font-sans antialiased">
        ${componentHtml}
      </body>
    </html>
  `
}

export function componentPreviewJsx(componentHtml: string) {
  let clonedHtml = componentHtml

  clonedHtml = clonedHtml.replace(/class=/g, 'className=')
  clonedHtml = clonedHtml.replace(/for=/g, 'htmlFor=')
  clonedHtml = clonedHtml.replace(/viewBox=/g, 'viewBox=')
  clonedHtml = clonedHtml.replace(/fill-rule=/g, 'fillRule=')
  clonedHtml = clonedHtml.replace(/fill-opacity=/g, 'fillOpacity=')
  clonedHtml = clonedHtml.replace(/clip-rule=/g, 'clipRule=')
  clonedHtml = clonedHtml.replace(/stroke-linecap=/g, 'strokeLinecap=')
  clonedHtml = clonedHtml.replace(/stroke-linejoin=/g, 'strokeLinejoin=')
  clonedHtml = clonedHtml.replace(/stroke-width=/g, 'strokeWidth=')
  clonedHtml = clonedHtml.replace(/stroke-dasharray=/g, 'strokeDasharray=')
  clonedHtml = clonedHtml.replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
  clonedHtml = clonedHtml.replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
  clonedHtml = clonedHtml.replace(/stroke-opacity=/g, 'strokeOpacity=')
  clonedHtml = clonedHtml.replace(/tabindex=/g, 'tabIndex=')
  clonedHtml = clonedHtml.replace(/<!--/g, '{/*')
  clonedHtml = clonedHtml.replace(/-->/g, '*/}')

  return clonedHtml
}

export function componentPreviewVue(componentHtml: string) {
  const newComponentHtml = `<template>\n${componentHtml}</template>`
  const formattedComponentHtml = newComponentHtml
    .split('\n')
    .map((codeLine) => {
      if (codeLine.includes('<template>') || codeLine.includes('</template>')) {
        return codeLine.trim()
      }

      return `  ${codeLine}`
    })
    .join('\n')

  return formattedComponentHtml
}

export function blogPreviewHtml(
  componentHtml: string,
  componentContainer = 'relative',
  isDarkMode = false
) {
  const htmlClass = isDarkMode ? 'dark' : 'relative'

  return `
    <html class="${htmlClass}">
      <head>
        <link rel="stylesheet" href="/blogs.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

        <script src="/iframe.js"></script>
      </head>

      <body class="${componentContainer} font-sans antialiased">
        ${componentHtml}
      </body>
    </html>
  `
}
