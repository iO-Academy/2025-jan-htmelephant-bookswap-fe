import { useState } from "react";
import Errors from "./Errors";

export default function ReturnForm ({claimedBy, id}) {
    const [email, setEmail] = useState ()
    const [hideForm, setHideForm] = useState(false)
    const [response, setResponse] = useState("")
    const [errors, setErrors] = useState({})
    

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
          .then((res) => {
            if (res.status == 422 || res.status == 404 || res.status == 400 || res.status == 500) {
              setHideForm(false);
            } else if (res.status == 200) {
              setHideForm(true);
            }
            return res.json();
          })
          .then((data) => {
                if (data.errors) {
                setErrors(data.errors); 
                } else {
                setResponse(data.message);
            }
          })
    }

    function handleInput (e) {
        setEmail(e.target.value)
    }
    



    return(
        <>
        {claimedBy !== null && !hideForm && (
                <form
                  className="flex flex-col gap-2 border-1 p-3 max-sm:text-left"
                  onSubmit={returnBook}
                >
                    
                  <div className="flex flex-col gap-2">
                    <h3>Want to return this book?</h3>
                    <label htmlFor="email">{claimedBy}'s email</label>
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
                    value="Return Book"
                  />
                </form>
              )}
              
        </>
    )
}