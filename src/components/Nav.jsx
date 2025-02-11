import { Link } from "react-router-dom";
import ClaimedBookPage from "./ClaimedBookNavLink";

export default function Nav() {
  return (
    
    <nav className="grid grid-cols-1 md:grid-cols-2  p-4 max-sm:flex-col max-sm:items-center items-center">
      <Link className="text-center md:text-left" to="/">Book Swap</Link>

      <div className="flex justify-center gap-4 text-center md:justify-end">
        <Link to="/">Available Books</Link>
        <Link to="/claimed-books/">Claimed Books</Link>
      </div>

    </nav>
  );
}
