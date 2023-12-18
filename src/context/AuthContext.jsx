import { createContext, useContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signOut } from "firebase/auth";
import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
//! create context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //! sign in
  function SignIn() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }
  //! sign out
  function Logout() {
    signOut(auth);
  }
  //! set user
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user1) => {
      setUser(user1);
      setLoading(false);
    });
    return unsub;
  }, []);

  const value = { user, setUser, SignIn, Logout };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
