import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { getCurrentSession } from "./backend/auth";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentSession()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>{/* <Outlet /> */}</main>
          <Footer />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
