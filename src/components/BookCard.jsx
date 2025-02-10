export default function BookCard({title, author, genre, image, id}) {
    return (
        <div className="">
            <img src={image} />
            <ul key={id}>
                <li>{title}</li>
                <li>{author}</li>
                <li>{genre}</li>
            </ul>
        </div>
    )
}