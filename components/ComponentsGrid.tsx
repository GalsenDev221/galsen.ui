import { GalsenUiComponentGroup } from "@/types/Component";
import ComponentCard from "./ComponentCard";

export default function ComponentsGrid({ componentItems }: { componentItems: GalsenUiComponentGroup[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 w-full">
      {componentItems.map((componentData) => (
        <li key={componentData.title}>
          <ComponentCard componentData={componentData} />
        </li>
      ))}
    </ul>
  )
}
