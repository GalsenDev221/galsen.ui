import Link from 'next/link'
import { GalsenUiComponentGroup } from '@/types/Component'

export default function ComponentCard({ componentData }: { componentData: GalsenUiComponentGroup }) {
  return (
    <Link href={`/components/${componentData.slug}`}>
      <div className="group relative block h-full bg-white before:absolute before:inset-0 before:bg-black">
        <div className="h-full translate-y-0 translate-x-0 border-2 border-gray-900 bg-white group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-all duration-200 ease-out">
          <div className="p-4 sm:p-6">
            <span aria-hidden="true" role="img" className="text-lg text-center sm:text-xl">
              {componentData.emoji}
            </span>

            <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">{componentData.title}</h2>
            <p className="mt-1 text-sm text-gray-700">{componentData.count} {componentData.count > 1 ? 'Composants' : 'Composant'}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
