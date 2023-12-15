import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function SendMsg() {
  const [txt, setTxt] = useState("");
  const { user } = UserAuth();

  async function handleMsg(e) {
    e.preventDefault();

    if (txt.trim() === "") {
      alert("Invalid");
      return;
    }
    try {
      const { uid, displayName, photoURL } = user;
      await addDoc(collection(db, "chat"), {
        text: txt,
        name: displayName,
        avatar: photoURL,
        uid,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
    setTxt("");
  }
  return (
    <div className="fixed bottom-0 w-full py-10 ">
      <form className="wrapctn flex px-4" onSubmit={handleMsg}>
        <input
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          type="text"
          placeholder="Type..."
          className="input input-bordered w-full focus:outline-none focus:bg-slate-200"
        />
        <button
          type="submit"
          className="w-auto text-white rounded-r-lg px-5 text-sm bg-green-500 opacity-80"
        >
          Send
        </button>
      </form>
    </div>
  );
}
