import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PiChatsCircleFill } from "react-icons/pi";

export default function Login() {
  const { user, SignIn } = UserAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await SignIn();
    } catch (error) {
      console.log(error);
    }
  }
  //! login success then navigate
  useEffect(() => {
    if (user) {
      navigate("/chat");
    }
  }, [user]);

  return (
    <div className="min-h-screen hero ">
      <div className="hero-overlay bg-slate-100"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <PiChatsCircleFill size={150} className="ml-5" />
          <h1 className="mb-6 text-5xl font-bold text-black/70">Chat App</h1>
          <p className="mb-5 text-black opacity-40">
            Let&apos;s talk about something
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => handleLogin()}
              className="flex gap-2 px-10 py-4 text-white transition-all border rounded-full hover:bg-slate-400 bg-black/80"
            >
              <img src="/user.svg" alt="user logo"></img>
              <label className="cursor-pointer whitespace-nowrap text-[16px] font-[500]">
                Login
              </label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
