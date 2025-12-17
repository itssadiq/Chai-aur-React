import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 text-center my-4">
      This is user {username}
    </div>
  );
}

export default User;
