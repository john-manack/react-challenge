const Details = (props) => {
    const { description, height, width, id, g , b } = props;
    return (
        <p>{description} <a href={`https://picsum.photos/id/${id}/${width}/${height}/?${g}&${b}`}> https://picsum.photos/id/{id}/{width}/{height}/?{g}&{b}</a></p>
    )
}

export default Details;