export default function Footer() {
  return (
    <footer className="mt-14 border-t border-neutral-100">
      <div className="px-4 py-5 flex flex-col gap-2 items-center justify-between sm:max-w-7xl sm:mx-auto sm:flex-row md:py-8">
        <span>&copy; Galsen UI. Tous droits réservés.</span>
        <span>
          Made w/ ❤️ by{" "}
          <a
            href="https://galsen.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Galsen DEV
          </a>
        </span>
        <ul className="inline-flex items-center gap-4">
          <li className="text-sm">
            <a
              href="https://x.com/galsendev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              X (Twitter)
            </a>
          </li>
          <li className="text-sm">
            <a
              href="https://github.com/GalsenDev221"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
