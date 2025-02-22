export const SeriesCard = ({ data }) => {
    const { img_url, name, rating, description, genre, cast, watch_url } = data;
    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        borderRadius: "100px"
    }
    const ratingClass = rating >= 8.5 ? "super_hit" : "average";
    return (
        <li className="card">
            <div>
                <img src={img_url} alt={name}
                    width="40%" height="40%" />
            </div>
            <div className="card-content">
                <h2>Name: {name}</h2>
                <h3>Rating:<span className={`rating ${ratingClass}`}>{rating}</span></h3>
                <p><b>summary:</b>{description}</p>
                <p><b>Genre:</b>{genre}</p>
                <p><b>Cast:</b>{cast}</p>
                <a href={watch_url} target="_blank">
                    <button style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>
    );
};