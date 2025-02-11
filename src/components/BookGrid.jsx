import { useEffect, useState } from "react"
import BookCard from "./BookCard"
export default function BookGrid() { 
    const [books, setBooks] = useState([])
    function getBooks() {
        fetch("https://book-swap-api.dev.io-academy.uk/api/books")
            .then((res) => res.json())
            .then((bookInfo) => {
                setBooks(bookInfo.data)
            })
        }

useEffect(getBooks, [] )

    return (
        <div >
            {books.map(function (book) {
                return <BookCard 
                    key={book.id} 
                    title={book.title}
                    image={book.image} 
                    genre={book.genre.name}
                    author={book.author}
                    id={book.id}
                    />
                })}
        </div>
    )
}
