import { GalsenUiComponentGroup } from '@/types/Component'
import Link from 'next/link'

export default function ComponentCard({ componentData }: { componentData: GalsenUiComponentGroup }) {
  const componentCountPluralize = componentData.count > 1 ? 'Composants' : 'Composant'
  const componentCount = `${componentData.count} ${componentCountPluralize}`


  return (
    <Link href={`/components/`}>
      <div className="group relative block h-full bg-white">
        <div className="h-full rounded-md border-2 border-gray-900 bg-white">
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between">
              <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                {componentData.emoji}
              </span>
            </div>
            <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">{componentData.title}</h2>
            <p className="mt-1 text-sm text-gray-700">{componentCount}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}