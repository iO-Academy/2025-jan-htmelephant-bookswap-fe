import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex justify-center p-4 md:justify-start">
      <Link to="/">Book Swap</Link>
    </nav>
  );
}
