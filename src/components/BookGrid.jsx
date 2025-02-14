import { useEffect, useState } from "react";
import BookCard from "./BookCard";
export default function BookGrid({ claimed }) {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState([])
  const [genreId, setGenreId] = useState(0)

  function getBooks(genreId = 0, searching) {
    let url = `https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`
    if (genreId !== 0) url += `&genre=${genreId}`;
    if (searching) url += `&search=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((bookInfo) => {
        setBooks(bookInfo.data);
        console.log(bookInfo)
      });
  }

  useEffect(() => {
    getBooks(genreId, search)
  }, [claimed, genreId])

  useEffect(getGenres, [])

  return (
    <>
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
      <div className="p-2 grid grid-cols-1 text-center md:flex">
        <label className="p-2" htmlFor="genre">Filter By Genre: </label>
        <select id="genre" className="border-1 p-2 rounded" onChange={(e) => setGenreId(parseInt(e.target.value))}>
          <option  value={0} defaultValue>Any</option>
          {genres.map((genre) => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>
          })}
        </select>
      </div>

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

    </>
  );
}
