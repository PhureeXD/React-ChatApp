/* eslint-disable react/prop-types */
import { UserAuth } from "../context/AuthContext";

export default function Message({ message }) {
  const { user } = UserAuth();
  console.log(message.avatar);
  return (
    message && (
      <>
        <div
          className={`chat ${
            message.uid === user.uid ? "chat-end" : "chat-start"
          }`}
        >
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="avatar" src={`${message.avatar}`} />
            </div>
          </div>

          <div className="chat-header">{message.name}</div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      </>
    )
  );
}
