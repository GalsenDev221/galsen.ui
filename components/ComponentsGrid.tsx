import { GalsenUiComponentGroup } from "@/types/Component";
import ComponentCard from "./ComponentCard";

export default function ComponentsGrid({ componentItems }: { componentItems: GalsenUiComponentGroup[] }) {
  return (
    <ul className="md:col-start-4 md:col-end-6 divide-y-2 divide-blue-300 dark:divide-blue-700 divide-dashed rounded-lg overflow-hidden">
      {componentItems.map((componentData) => (
        <li className="bg-blue-100 dark:bg-gray-800" key={componentData.title}>
          <ComponentCard componentData={componentData} />
        </li>
      ))}
    </ul>
  )
}
