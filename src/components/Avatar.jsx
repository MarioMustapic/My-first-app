import "./Avatar.css";

import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";


export function Avatar(props) {
  const { user } = useContext(AppContext);

  const avatarAlt = "Avatar " + user.username;
  const avatarSrc = props.src || "/avatar.svg";

  return <img className="avatar" src={avatarSrc} alt={avatarAlt} />;
}
