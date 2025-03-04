import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn({ className }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={logoutHandler}
      disabled={loading}
      className={`text-lg font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl transition-all ${className}`}
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}

export default LogoutBtn;