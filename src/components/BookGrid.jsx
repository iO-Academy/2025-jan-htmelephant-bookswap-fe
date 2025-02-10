    import { useEffect, useState } from "react";
import BookCard from "./BookCard";
    export default function BookGrid() { 
        const [books, setBooks] = useState([]);
        function getBooks() {
            fetch("https://book-swap-api.dev.io-academy.uk/api/books")
            .then((res) => res.json())
            .then((bookInfo) => {
                setBooks(bookInfo.data)
                console.log(bookInfo.data)
            });
     }

    useEffect(getBooks, [] );

        return (
            <div >
                    {books.map(function (bookApi) {
                       return <BookCard 
                       key={bookApi.id} 
                       title={bookApi.title}
                       image={bookApi.image} 
                       genre={bookApi.genre.name}
                       author={bookApi.author}
                       id={bookApi.id}/>
                    })}
             </div>
        );
    }
    