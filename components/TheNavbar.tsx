import TheLogo from "@/components/TheLogo";
import { ACCUEIL_PATH, COMPONENTS_PATH } from "@/routes";
import Link from "next/link";

export default function TheNavbar() {
  return (
    <header className="py-5">
      <nav className="px-4 flex items-center justify-between sm:max-w-7xl sm:mx-auto">
        <Link href={ACCUEIL_PATH}><TheLogo /></Link>

        {/* TODO: do we need this for now? */}
        <ul className="hidden inline-flex items-center gap-3">
          {/* TODO: add correct links */}
          <li>
            <Link href={ACCUEIL_PATH}>Accueil</Link>
          </li>
          <li>
            <Link href={COMPONENTS_PATH}>Components</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
