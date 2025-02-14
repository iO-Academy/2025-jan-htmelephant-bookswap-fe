import { useEffect, useState } from "react"

export default function AddBook() {

    const [genres, setGenres] = useState([])

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState(null)
    const [year, setYear] = useState(NaN)
    const [pageCount, setPageCount] = useState("")
    const [imageURL, setImageURL] = useState("") // declare placeholder image if user doesnt input an image url
    const [blurb, setBlurb] = useState("")
    
    // const [postBody, setPostBody] = useState({})

    const [errors, setErrors] = useState({})

    const [success, setSuccess] = useState(false)

    function fetchGenres(){
        fetch('https://book-swap-api.dev.io-academy.uk/api/genres', {
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                setGenres(data.data)
                setGenre(1)
        })
    }

    function submitBook(e) {
        e.preventDefault()
        try{
            fetch('https://book-swap-api.dev.io-academy.uk/api/books', {
                mode: 'cors',
                method : 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body : JSON.stringify(createPostBody())
            })
                .then(res => {
                    if (res.status == 201) {
                        setSuccess(true)
                    }
                    return res.json()
            })
                .then(data => {
                    if (data.errors){
                        setErrors(data.errors)
                    }
            })
        } catch(err) {
            console.error(err)
        }
    }

    function createPostBody(){
        let body = {}

        if (title) body.title = title
        if (author) body.author = author
        if (genre !== null) body.genre_id = genre
        if (!isNaN(year)) body.year = year
        if (blurb) body.blurb = blurb
        if (imageURL) body.image = imageURL

        // setPostBody(body)
        return body;
    }

    function handleInput(e){
        switch (e.target.id) {
            case "title":
                setTitle(e.target.value)
                break;
            case "author":
                setAuthor(e.target.value)
                break;
            case "genre":
                setGenre(parseInt(e.target.value))
                break;
            case "year":
                setYear(parseInt(e.target.value))
                break;
            case "page_count":
                setPageCount(e.target.value)
                break;
            case "image":
                setImageURL(e.target.value)
            case "blurb":
                setBlurb(e.target.value)
            default:
                break;
        }
    }

    useEffect(fetchGenres, [])
    // useEffect(createPostBody, [title, author, genre, year, pageCount, imageURL, blurb])

    return (
        <>
            <div className="flex justify-center">
                {!success && 
                    <form onSubmit={submitBook} className="grid grid-cols-1 w-10/12 gap-2 md:w-4/12">
                        <label htmlFor="title">Title (Required)</label>
                        <input className="border-1 p-2 rounded" onChange={handleInput} type="text" id="title" name="title" />
                        {errors.title && title === "" && <p className="text-red-600">{errors.title[0]}</p>}

                        <label htmlFor="author">Author (Required)</label>
                        <input className="border-1 p-2 rounded" onChange={handleInput} type="text" id="author" name="author" />
                        {errors.author && author === "" && <p className="text-red-600">{errors.author[0]}</p>}

                        <label htmlFor="genre">Genre (Required)</label>
                        <select className="border-1 p-2 rounded" onChange={handleInput} id="genre">
                            {genres.map((genre) => {
                                return <option key={genre.id} value={genre.id}>{genre.name}</option>
                            })}
                        </select>
                        {errors.genre_id && genre === 0 && <p className="text-red-500">Please Select A Genre</p>}

                        <label htmlFor="year">Year</label>
                        <input className="border-1 p-2 rounded" onChange={handleInput} type="text" id="year" name="year" />
                        {errors.year && <p className="text-red-500">{errors.year[0]}</p>}

                        <label htmlFor="page_count">Page Count</label>
                        <input className="border-1 p-2 rounded" onChange={handleInput} type="text" id="page_count" name="page_count" />

                        <label htmlFor="image">Image URL</label>
                        <input className="border-1 p-2 rounded" onChange={handleInput} type="text" id="image" name="image" />
                        {errors.image && <p className="text-red-500">{errors.image[0]}</p>}

                        <label htmlFor="blurb">Blurb</label>
                        <textarea className="border-1 p-2 rounded" onChange={handleInput} id="blurb" name="blurb" />

                        <input className="border-1 p-2 rounded" type="submit" value="Add Book" />
                    </form>
                }

                {success && <p className="text-center text-2xl p-4">You Submitted a book! <br /> Thank You!</p>}
            </div>
        </>
    )
}