import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";

export default function ChatBox() {
  const [msgs, setMsgs] = useState([]);
  const NowMsgRef = useRef();
  //! scroll update-msg
  function scrollnow() {
    NowMsgRef.current.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => scrollnow, [msgs]);
  //! realtime
  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("createdAt"), limit(50));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msg = [];
      querySnapshot.forEach((doc) => {
        msg.push({ ...doc.data(), id: doc.id });
      });
      setMsgs(msg);
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="pb-40 pt-20 wrapctn ">
      {msgs.map((m) => (
        <Message key={m.id} message={m} />
      ))}
      <footer ref={NowMsgRef} />
    </div>
  );
}
