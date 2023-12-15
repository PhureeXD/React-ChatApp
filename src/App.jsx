import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Chatroom from "./pages/Chatroom";

export default function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/chat"
          element={
            <PrivateRoute>
              <Chatroom />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}
