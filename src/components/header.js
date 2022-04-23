import earth from '../images/earth.png';
import "../style.css";

export default function Header() {
    return(
        <div className="header">
            <h2 className="head--text"><img className="earth--image" src={earth} /> My Travel Journal</h2>
        </div>
    )
}