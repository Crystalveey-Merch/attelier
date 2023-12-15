import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";
import "firebase/auth";

import { useState, useEffect } from "react";
import { auth } from "../firebase/auth.js";
import { db } from "../firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.addScope("profile");
      provider.addScope("email");
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      // Handle the error here, display an error message, or perform any other desired action
    }
  };
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result.user) {
          const user = result.user;
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const userRef = doc(db, "users", result.user.uid);
          const userDetails = {
            name: user.displayName,
            email: user.email,
          };
          const docSnapshot = await getDoc(userRef);
          if (docSnapshot.exists()) {
            await updateDoc(userRef, userDetails);
          } else {
            await setDoc(userRef, userDetails);
          }
          toast.success(<div className="text-black text-sm ">Login Successful</div>);
          navigate("/");
        }
      } catch (error) {
        console.error("Firebase Error:", error.code, error.message);
        // Handle the error here, display an error message, or perform any other desired action
      }
    };

  handleRedirectResult();
}, []);
  const signInwithFacebook = async () => {
    
    const provider = new FacebookAuthProvider();
    provider.addScope("user_name");
    provider.addScope("user_email");
    
    const result = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = result.user;
    // This gives you a Facebook Access Token.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const userRef = doc(db, "users", result.user.uid);
    const userDetails = {
      name: user.displayName,
      email: user.email,
    };
    const docSnapshot = await getDoc(userRef);
    if (docSnapshot.exists()) {
      await updateDoc(userRef, userDetails);
    } else {
      await setDoc(userRef, userDetails);
    }
    toast.error(<div className="text-black text-sm ">Login Successful</div>);
    navigate("/");
  };

  return (
    <div className=" mt-24 text-black pt-5 sm:mt-16 w-full h-auto flex AcehLight">
      <div className=" h-full p-auto m-auto ">
        <div className="mb-40 sm:mb-40 ">
          <i className="fa-sharp fa-solid fa-cart-shopping text-8xl text-gray-500 flex justify-center my-10"></i>
          <h2 className="text-xl text-center   text-black sm:text-xl mx-aluto">
            Login to Crystalveey&apos;s Atelier
          </h2>
          <div className="flex flex-col gap-10 mx-40 sm:mx-4 my-10">
            <div className="btn" onClick={signInWithGoogle}>
              <i className="fa-brands fa-google text-2xl"></i> Login with Google
            </div>

          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
