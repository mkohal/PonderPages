import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const login = async (data) => {
    setError("");
    setIsLoading(true); // Start loading
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/my-feed");
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Stop loading on error
    }
  };

  return (
    <div className="flex items-center justify-center m-4">
      <div className="w-full max-w-md bg-gray-100 rounded-xl p-10 border border-black/10 shadow-lg">
        <h2 className="text-center text-2xl font-bold">
          Login to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-6 space-y-5">
          <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            className="w-full"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password:"
            type="password"
            placeholder="Enter your password"
            className="w-full"
            {...register("password", { required: true })}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
