import { useState } from "react"

export default function AddReview({id}){

    const [name, setName] = useState("")
    const [score, setScore] = useState(1)
    const [review, setReview] = useState("")

    const [errors, setErrors] = useState([])

    const [success, setSuccess] = useState(false)

    function addReview(e){
        e.preventDefault()
        fetch('https://book-swap-api.dev.io-academy.uk/api/reviews', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body : JSON.stringify({
                "name": name ,
                "rating": score ,
                "review": review ,
                "book_id": parseInt(id)
            })
        }).then(res => {
            if (res.status == 201) setSuccess(true)
            return res.json()
        })
            .then(data => {
                console.log(data)
                if (data.errors) {
                    setErrors(data.errors)
                }
            })
    }

    function handleInput(e) {
        console.log("handling input")
        switch (e.target.id) {
            case "name":
                setName(e.target.value)
                break;
            case "score":
                setScore(parseInt(e.target.value))
                break;
            case "review":
                setReview(e.target.value)
                break;
        }
    }

    return (
        <>
            {!success && 
                <form onSubmit={addReview} className="grid grid-cols-1 border-1 p-2 text-left gap-2">

                    <p>Want to add a review?</p>

                    <label htmlFor="name">Name:</label>
                    <input onChange={handleInput} className="border-1 p-1" type="text" id="name" name="name" placeholder="Name"/>
                    {errors.name && name === "" && <p className="text-red-500">{errors.name[0]}</p>}

                    <div className="flex gap-2">
                        <label htmlFor="score">Score:</label>
                        <select onChange={handleInput} id="score" className="border-1 w-1/12">
                            <option value={1} defaultValue>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>

                    <label htmlFor="review">Review:</label>
                    <textarea onChange={handleInput} className="border-1 p-1" id="review" placeholder="Write Your Review" />
                    {errors.review && review === "" && <p className="text-red-500">{errors.review[0]}</p>}

                    <input className="border-1 p-1" type="submit" value="Add Review" />
                </form>
            }

            {success && <p className="text-green-600">You have added a review! Thanks.</p>}
        </>
    )
}