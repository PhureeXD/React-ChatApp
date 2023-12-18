import { UserAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, Logout } = UserAuth();
  async function handleLogout() {
    try {
      await Logout();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="fixed z-10 navbar mygradient">
      <div className="flex justify-between wrapctn">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <span className="flex-1 mx-2 text-lg font-bold text-slate-600">
          Chat App
        </span>
      </div>
      <div className="justify-end flex-1">
        {user ? (
          <a
            href="/"
            onClick={handleLogout}
            className="leading-none text-white rounded-full btn text-md btn-error"
          >
            Logout
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
