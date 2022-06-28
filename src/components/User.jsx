import {Avatar} from "./Avatar.jsx";

export function User ({username, src, alt}) {
    return (
        <div>
    <Avatar src={src} alt={alt}/>
    <p>{username}</p>
    </div>
    )
}