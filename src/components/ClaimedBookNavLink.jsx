import { useState } from "react";
import { Link } from "react-router-dom";

export default function ClaimedBookPage() {
  let [claimedBooksPage, setClaimedBooksPage] = useState(false);

  function handleClaimedBooks() {
    setClaimedBooksPage = true;
    console.log(claimedBooksPage);
  }

  return (
    <div>
      <Link to="/claimed-books/" onClick={handleClaimedBooks}>
        Claimed Books
      </Link>
    </div>
  );
}
