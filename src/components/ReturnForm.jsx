import { useState } from "react";
import Errors from "./Errors";

export default function ReturnForm({ id, getBookData, setMessage }) {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  function returnBook(e) {
    e.preventDefault();
    fetch(`https://book-swap-api.dev.io-academy.uk/api/books/return/${id}`, {
      mode: "cors",
      method: "PUT",
      body: JSON.stringify({ email }),
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
          setMessage(data.message);
          getBookData();
        }
      });
  }

  function handleInput(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <div>
        <form
          className="mt-2 flex flex-col gap-2 border-1 p-3 max-sm:text-left"
          onSubmit={returnBook}
        >
          <div className="flex flex-col gap-2">
            <h3>Want to return this book?</h3>
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
            {errors && <Errors errors={errors[0]} />}
          </div>

          <input
            className="mt-2 border-1 p-1 hover:bg-[#7600DC] hover:text-[#F0F0F0]"
            type="submit"
            value="Return Book"
          />
        </form>
      </div>
    </>
  );
}
