import { Link } from "react-router-dom";
import ClaimedBookPage from "./ClaimedBookPage";

export default function Nav() {
  return (
    <nav className="flex justify-between p-4 max-sm:flex-col max-sm:items-center">
      <Link to="/">Book Swap</Link>
      <div className="flex gap-2">
        <ClaimedBookPage />
      </div>
    </nav>
  );
}
