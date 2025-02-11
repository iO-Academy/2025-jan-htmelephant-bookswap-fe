export default function ClaimForm() {
    return(
        <>
        <form>
            <label htmlFor="fname">First Name</label>
            <input id="fname" type="text" name="fname"/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email"/>
            <input type="submit" value="Claim Book"/>
        </form>
        </>
    )
}