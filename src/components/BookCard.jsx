import { Link } from "react-router-dom";

export default function BookCard({ title, author, genre, image, id }) {
  return (
    <div className="">
      <Link to={`/books/${id}`}>
        <img src={image} alt="" />

        <ul>
          <li className="text-xl">{title}</li>
          <li>{author}</li>
          <li>{genre}</li>
        </ul>
      </Link>
    </div>
  );
}
