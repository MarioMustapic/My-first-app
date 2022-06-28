import "./User.css";
import {Avatar} from "./Avatar.jsx";

export function User (props) {
    return (
        <div className="user">
    <Avatar src={props.src} alt={props.alt}/>
    <p>{props.username}</p>
    </div>
    )
}