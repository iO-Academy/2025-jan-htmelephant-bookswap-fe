import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function DisplaySingleBook() {
    const {id} = useParams()
    //Whatever is after : in the route is what goes into the {}
    //This ONLY works for dynamic routes - a route that contains :something
    //This is how we get the id from the route

    const [title, setTitle] = useState([])
    const [author, setAuthor] = useState([])
    const [blurb, setBlurb] = useState([])
    const [genre, setGenre] = useState([])
    const [image, setImage] = useState([])
    const [year, setYear] = useState([])
    
    function getBookData() {
        fetch (`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
            .then((response) => response.json())
            .then((bookInfo) => {
                console.log(bookInfo.data)
                setTitle(bookInfo.data.title)
                setAuthor(bookInfo.data.author)
                setYear(bookInfo.data.year)
                setBlurb(bookInfo.data.blurb)
                setGenre(bookInfo.data.genre.name)
                setImage(bookInfo.data.image)
        })
    }

    useEffect(getBookData, [])
   
   
    return (
        <div>
                <ul>
                <img src={image} alt={title} />
                    <li>{title}</li>
                    <li>{author}</li>
                    <li>{year}</li>
                    <li>{genre}</li>
                    <li>{blurb}</li>
                    </ul> 
        </div>
    )
}