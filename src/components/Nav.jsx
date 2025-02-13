import { Link } from "react-router-dom";
import DisplayedBooksLink from "./DisplayedBooksLink";

export default function Nav() {
  
  return (
    <nav className="grid grid-cols-1 items-center p-4 max-sm:flex-col max-sm:items-center md:grid-cols-2">
      <Link className="text-center md:text-left" to="/">
        Book Swap
      </Link>

      <div className="grid grid-cols-2 justify-center gap-4 text-center md:justify-end md:grid-cols-3">
        <DisplayedBooksLink link="/" text="Available Books" />
        <DisplayedBooksLink link="/claimed-books/" text="Claimed Books" />
        <div className=" flex col-span-2 justify-center md:col-span-1">
          <DisplayedBooksLink className="w-6/12 md:w-full" link="/addbook" text="Add Book" />
        </div>
      </div>
    </nav>
  );
}
