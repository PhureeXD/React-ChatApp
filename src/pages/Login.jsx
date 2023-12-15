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
    <div className="hero min-h-screen ">
      <div className="hero-overlay bg-slate-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <PiChatsCircleFill size={150} className="ml-5" />
          <h1 className="mb-6 text-5xl font-bold text-black">Chat App</h1>
          <p className="mb-5 text-black opacity-40">
            Let&apos;s talk about something
          </p>
          <button
            onClick={() => handleLogin()}
            className="btn bg-slate-600 text-white"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
