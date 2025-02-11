import { Link } from "react-router-dom";

export default function BookCard({title, author, genre, image, id}) {
    return (
        <div className="">
            <Link to={`/books/${id}`}>
                <img src={image} alt=""/>
                <ul key={id}>
                    <li>{title}</li>
                    <li>{author}</li>
                    <li>{genre}</li>
                </ul>
            </Link>
        </div>
    )
}