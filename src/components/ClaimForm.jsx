import { useState } from "react"

export default function ClaimForm({claimedBy}) {

    function claimBook(){
        
    }

    return(
        <>
            {claimedBy === null &&
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" name="fname"/>

                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"/>

                    <input type="submit" value="Claim Book"/>
                </form>
            }

            {claimedBy !== null && <p>Claimed by {claimedBy}</p>}
            
        </>
    )
}