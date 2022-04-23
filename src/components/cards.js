import "../style.css"

export default function Card(props) {
    return(
        <div className="travel--card">
            <img className="card--image" src={props.image} />
            <div className="card--content">
                <div className="card--header">
                    <p>{props.country} <i class="bi bi-pin-map-fill"></i> <a className="maps--link" href={props.link}>Google Maps</a></p>
                </div>
                <div className="card--text">
                    <h1 className="card--city">{props.city}</h1>
                    <p className="card--dates">{props.dates}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}