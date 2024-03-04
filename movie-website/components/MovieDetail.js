import PropTypes from "prop-types";

function MovieDetail({key,coverImg,title,genres,imdb,lang,runtime,likes,rating,description}){
    return ( 
    <div>
        <img src={coverImg} alt="title" />
        <h2>{title}</h2>
        <ul>
            {genres.map((g)=>(
                <li key={g}>{g}</li>
            ))}
        </ul>
        <div>imdb code: {imdb}</div>
        <div>language: {lang}</div>
        <div>runtime: {runtime} min</div>
        <div>like: {likes} | rating: {rating}</div>
        <br></br>
        <div>{description}</div>
        
    </div>);
}

MovieDetail.propTypes={
    key:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    imdb: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    runtime:PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

export default MovieDetail;