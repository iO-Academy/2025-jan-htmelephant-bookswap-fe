import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ClaimForm from "../components/ClaimForm";

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
      });
  }

  useEffect(getBookData, []);
  return (
    <div className="grid grid-cols-1 gap-5 bg-gray-200 p-5 md:grid-cols-2">
      <img src={image} alt="" />
      <ul className="flex flex-col justify-center gap-2 max-sm:text-center">
        <li className="text-2xl">{title}</li>
        <li>{author}</li>
        <li>{year}</li>
        <li>{genre}</li>
        <ClaimForm claimedBy={claimedBy} id={id} title={title} />
        <li>{blurb}</li>
      </ul>
    </div>
  );
}
