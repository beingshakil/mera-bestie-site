import React, { useState } from "react";
import {
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

const Login = () => {
  const { login } = useAuth();
  const [state, setState] = useState("Login");
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const response = await login(emailOrMobile, password);
        if (response === "Login successful") {
          window.location.href = "/";
        }
      } else {
        if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
        }
        console.log("Sign-up logic here");
      }
    } catch (error) {
      console.error(`${state} failed:`, error);
    }
  };

  return (
    <>
      <Helmet>
        <title>{state} | Mera Bestie</title>
      </Helmet>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <div className="flex-grow flex items-center justify-center mt-24 w-full">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {state}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {state === "Sign Up" && (
                <>
                  <div className="transition-all duration-500">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    />
                  </div>
                  <div className="transition-all duration-500">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                    />
                  </div>
                </>
              )}
              <div>
                <input
                  type="text"
                  placeholder="Email or Mobile"
                  value={emailOrMobile}
                  onChange={(e) => setEmailOrMobile(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {state === "Sign Up" && (
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-600"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-all"
              >
                Continue
              </button>
            </form>
            <div className="mt-4 text-center">
              {state === "Sign Up" ? (
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setState("Login")}
                    className="text-pink-500 cursor-pointer hover:underline"
                  >
                    Login Here
                  </span>
                </p>
              ) : (
                <p>
                  Create an account?{" "}
                  <span
                    onClick={() => setState("Sign Up")}
                    className="text-pink-500 cursor-pointer hover:underline"
                  >
                    Click Here
                  </span>
                </p>
              )}
              {state === "Sign Up" && (
                <div className="mt-4 flex items-center space-x-2">
                  <input type="checkbox" />
                  <p className="text-sm text-gray-600">
                    By continuing, I agree to the terms of use & privacy policy.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105">
                <FaFacebook />
              </button>
              <button className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-transform transform hover:scale-105">
                <FaGoogle />
              </button>
              <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
