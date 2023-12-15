import ChatBox from "../components/ChatBox";
import SendMsg from "../components/SendMsg";
export default function Chatroom() {
  return (
    <div className="bg-slate-50">
      <ChatBox />
      <SendMsg />
    </div>
  );
}
