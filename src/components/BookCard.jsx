export default function BookCard({title, author, genre, image, id}) {
    return (
        <div className="">
            <h3 className="">{title}</h3>
            <img src={image} key={id} />
            <ul>
                <li>Id: {id}</li>
                <li>Genre: {genre}</li>
                <li>Author: {author}</li>
            </ul>
        </div>
    )
}