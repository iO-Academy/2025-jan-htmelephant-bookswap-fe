import { useEffect, useState } from "react";
import BookCard from "./BookCard";
export default function BookGrid({ claimed }) {

  const [books, setBooks] = useState([])
  const [genres, setGenres] = useState([])
  const [genreId, setGenreId] = useState(0)

  function getBooks(genreId = 0) {
    let url = `https://book-swap-api.dev.io-academy.uk/api/books?claimed=${claimed}`
    if (genreId !== 0) url += `&genre=${genreId}`;
    fetch(url)
      .then((res) => res.json())
      .then((bookInfo) => {
        setBooks(bookInfo.data);
      });
  }

  function getGenres(){
    fetch(`https://book-swap-api.dev.io-academy.uk/api/genres`)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.data);
        console.log(data.data)
      });
  }

  useEffect(() => {
    getBooks(genreId)
  }, [claimed, genreId])

  useEffect(getGenres, [])

  return (
    
    <>
      <select onChange={(e) => setGenreId(parseInt(e.target.value))}>
        <option  value={0} defaultValue>Any</option>
        {genres.map((genre) => {
          // console.log(genre)
          return <option key={genre.id}  value={genre.id}>{genre.name}</option>
        })}
      </select>

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
