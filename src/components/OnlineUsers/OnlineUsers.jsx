import "./OnlineUser.css";

import { useCollection } from "../../hooks/useCollection";
import Avatar from "../Avatar/Avatar";

function OnlineUsers() {
  const { error, documents } = useCollection("users");
  return (
    <div className="user-list">
      <h2> All Users</h2>
      {error && <div className="error"></div>}
      {documents &&
        documents.map((user) => {
          return (
            <div key={user.id} className="user-list-item">
              <span>{user.displayName}</span>
              <Avatar src={user.photoURL} />
            </div>
          );
        })}
    </div>
  );
}

export default OnlineUsers;
