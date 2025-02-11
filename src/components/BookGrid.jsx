import { useEffect, useState } from "react";
import BookCard from "./BookCard";
export default function BookGrid({ claimed }) {
  const [books, setBooks] = useState([]);
  function getBooks() {
    fetch(`https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`)
      .then((res) => res.json())
      .then((bookInfo) => {
        setBooks(bookInfo.data);
      });
  }

  useEffect(getBooks, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 md:gap-6 md:p-10 lg:grid-cols-3">
      {books.map(function (book) {
        return (
          <BookCard
            key={book.id}
            title={book.title}
            image={book.image}
            genre={book.genre.name}
            author={book.author}
            id={book.id}
          />
        );
      })}
    </div>
  );
}
