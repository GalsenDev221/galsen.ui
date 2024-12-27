import { HomePath, ComponentsPath } from "@/routes";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="py-5">
      <nav className="px-4 flex items-center justify-between sm:max-w-7xl sm:mx-auto">
        <Link href={HomePath}>
          <Logo />
        </Link>

        {/* TODO: do we need this for now? */}
        <ul className="inline-flex items-center gap-3">
          <li>
            <Link href={HomePath}>Accueil</Link>
          </li>
          <li>
            <Link href={ComponentsPath}>Components</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
