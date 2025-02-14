import { useEffect, useState } from "react";
import BookCard from "./BookCard";
export default function BookGrid({ claimed }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  function getBooks(searching) {
    let url = "https://book-swap-api.dev.io-academy.uk/api/books";

    if (searching) {
      url += `?search=${search}`;
    } else {
      url += `?claimed=${claimed}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((bookInfo) => {
        setBooks(bookInfo.data);
        console.log(bookInfo)
      });
  }

  function updateBooks() {
    getBooks(search);
}
useEffect(updateBooks, [search, claimed]);

  return (
    <div className="px-10 py-4">
      <div className="mb-4">
        <label htmlFor="search" className="mr-2 font-medium">
          Search Books:
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-1 rounded"
          placeholder="Search books..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              image={book.image}
              genre={book.genre.name}
              author={book.author}
              id={book.id}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No books found</p>
        )}
      </div>
    </div>
  );
}
