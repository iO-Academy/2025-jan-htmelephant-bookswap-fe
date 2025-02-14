import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClaimForm from "./ClaimForm";
import ReturnForm from "./ReturnForm";
import AddReview from "./AddReview";

export default function DisplaySingleBook() {
  const { id } = useParams();
  //Whatever is after : in the route is what goes into the {}
  //This ONLY works for dynamic routes - a route that contains :something
  //This is how we get the id from the route

  const [title, setTitle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [blurb, setBlurb] = useState([]);
  const [genre, setGenre] = useState([]);
  const [image, setImage] = useState([]);
  const [year, setYear] = useState([]);
  const [claimedBy, setClaimedBy] = useState("");
  const [message, setMessage] = useState();

  function getBookData() {
    fetch(`https://book-swap-api.dev.io-academy.uk/api/books/${id}`)
      .then((response) => response.json())
      .then((bookInfo) => {
        setTitle(bookInfo.data.title);
        setAuthor(bookInfo.data.author);
        setYear(bookInfo.data.year);
        setBlurb(bookInfo.data.blurb);
        setGenre(bookInfo.data.genre.name);
        setImage(bookInfo.data.image);
        setClaimedBy(bookInfo.data.claimed_by_name);
        console.log(bookInfo.data)
      });
  }

  useEffect(getBookData, [claimedBy]);
  return (
    <div className="grid grid-cols-1 gap-5 bg-gray-200 p-5 md:grid-cols-2">
      <img src={image} alt="" />
      <ul className="flex flex-col justify-center gap-2 max-sm:text-center">
        <li className="text-2xl">{title}</li>
        <li>{author}</li>
        <li>{year}</li>
        <li>{genre}</li>
        {claimedBy && (
          <li className="text-red-500">
            This book is claimed by <strong>{claimedBy}</strong>.
          </li>
        )}
        {claimedBy === null ? (
          <ClaimForm
            id={id}
            title={title}
            getBookData={getBookData}
            setMessage={setMessage}
          />
        ) : (
          <ReturnForm
            id={id}
            getBookData={getBookData}
            setMessage={setMessage}
          />
        )}
        {(message ?? "").includes("not") ? (
          <p className="text-red-500">{message}</p>
        ) : (
          <p className="text-green-700">{message}</p>
        )}

        <li>{blurb}</li>
        <h2 className="text-2xl font-light">Reviews</h2>
        <AddReview id={id} />
      </ul>
    </div>
  );
}
