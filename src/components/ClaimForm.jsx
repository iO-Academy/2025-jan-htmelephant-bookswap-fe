import { useEffect, useState } from "react";

export default function ClaimForm({ claimedBy, id, title }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [response, setResponse] = useState("");

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
        console.log(data);
        setResponse(data.message);
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
      {claimedBy === null && (
        <form onSubmit={claimBook}>
          <label htmlFor="name">Name: </label>
          <input onChange={handleInput} id="name" type="text" name="name" />

          <label htmlFor="email">Email: </label>
          <input onChange={handleInput} id="email" type="email" name="email" />

          <input type="submit" value="Claim Book" />
        </form>
      )}

      {response && <p>{response}</p>}
      {claimedBy !== null && <p>Claimed by {claimedBy}</p>}
    </>
  );
}
