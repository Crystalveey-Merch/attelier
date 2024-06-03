import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import "firebase/auth";

import { useState, useEffect } from "react";
import { auth, googleProvider } from "../firebase/auth.js";
import { db } from "../firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/user.slice.js";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.id);
      updateDoc(userRef, {
        lastLogin: serverTimestamp(),
        isAtelier: true,
      });
      navigate("/");
    }
  }, [user, navigate]);

  const signInWithGoogle = () => {
    signInWithRedirect(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        //const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.providerId);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        //const email = error.customData?.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toast.error(errorMessage);
        // ...
      });
  };

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
            <div className="btn cursor-pointer" onClick={signInWithGoogle}>
              <i className="fa-brands fa-google text-2xl"></i> Login with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
