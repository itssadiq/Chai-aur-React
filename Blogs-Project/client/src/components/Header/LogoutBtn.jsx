import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../../backend/auth";
import { logout } from "../../features/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    signOut();
    logout();
  };
  return <div></div>;
}

export default LogoutBtn;
