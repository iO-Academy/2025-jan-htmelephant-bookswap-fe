import { useState } from "react"

export default function ClaimForm({claimedBy}) {
    const [fname, setFname] = useState();
    const [email, setEmail] = useState();

    
    function claimBook(){   
    }

    function handleInput(e){
        if(e.target.id === "fname") {
            setFname(e.target.value)
        } else if(e.target.id === "email") {
            setEmail(e.target.value)
        }
    }

    return(
        <>
            {claimedBy === null &&
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input onChange={handleInput} id="fname" type="text" name="fname"/>

                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} id="email" type="email" name="email"/>

                    <input type="submit" value="Claim Book"/>
                </form>
            }

            {claimedBy !== null && <p>Claimed by {claimedBy}</p>}
            
        </>
    )
}