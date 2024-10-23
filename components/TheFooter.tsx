export default function TheFooter() {
  return (
    <footer className="mt-14 border-t border-neutral-100">
      <div className="px-4 py-5 flex flex-col gap-2 items-center justify-between sm:max-w-7xl sm:mx-auto sm:flex-row md:py-8">
        <span>&copy; Galsen UI. Tous droits réservés</span>
        <ul className="inline-flex items-center gap-2">
          {/* TODO: add correct links */}
          <li className="text-sm">Facebook</li>
          <li className="text-sm">Twitter</li>
          <li className="text-sm">Github</li>
        </ul>
      </div>
    </footer>
  );
}
