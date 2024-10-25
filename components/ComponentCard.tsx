import Link from 'next/link'
import { GalsenUiComponentGroup } from '@/types/Component'

export default function ComponentCard({ componentData }: { componentData: GalsenUiComponentGroup }) {
  return (
    <Link href={`/components/${componentData.slug}`}>
      <div className="group bg-blue-100 p-5 font-medium flex justify-between items-center hover:bg-blue-200">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" role="img" className="text-lg text-center sm:text-xl">
            {componentData.emoji}
          </span>
          <h4 className="text-neutral-900">{componentData.title}</h4>
          <p className="text-blue-600">-</p>
          <p className="text-blue-700 text-sm">{componentData.count} {componentData.count > 1 ? 'Composants' : 'Composant'}</p>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
          <ArrowUpRight />
        </div>
      </div>
    </Link>
  )
}

export function ArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-blue-400' viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 7h10v10M7 17L17 7" />
    </svg>
  )
}
