import { useEffect, useState } from "react";
import Errors from "./Errors";
import ReturnForm from "./ReturnForm";

export default function ClaimForm({ id, title, getBookData, setMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function claimBook(e) {
    e.preventDefault();
    fetch(`https://book-swap-api.dev.io-academy.uk/api/books/claim/${id}`, {
      mode: "cors",
      method: "PUT",
      body: JSON.stringify({ name, email }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setMessage(`You have claimed ${title}`);
          getBookData();
        }
      });
  }

  function handleInput(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-2 border-1 p-3 max-sm:text-left"
        onSubmit={claimBook}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name: </label>
          <input
            placeholder="Name"
            className="border-1 p-1"
            onChange={handleInput}
            id="name"
            type="text"
            name="name"
            value={name}
          />
          {errors.name && <Errors errors={errors.name[0]} />}

          <label htmlFor="email">Email: </label>
          <input
            placeholder="Email"
            className="border-1 p-1"
            onChange={handleInput}
            id="email"
            type="email"
            name="email"
            value={email}
          />
          {errors.email && <Errors errors={errors.email[0]} />}
        </div>

        <input
          className="mt-2 border-1 p-1 hover:bg-[#7600DC] hover:text-[#F0F0F0]"
          type="submit"
          value="Claim Book"
        />
      </form>
    </>
  );
}
