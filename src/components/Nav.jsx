import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex p-4 text-2xl sm:text-center md:text-left">
      <Link to="/">Book Swap</Link>
    </nav>
  );
}
