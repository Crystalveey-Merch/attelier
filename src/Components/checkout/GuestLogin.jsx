/* eslint-disable react/prop-types */
import { auth, googleProvider, signInWithRedirect } from "../../firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";

export const GuestLogin = ({ guestEmail, setGuestEmail }) => {
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

  const [email, setEmail] = useState("");

  const continueAsGuest = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter an email address");
      return;
    }
    setGuestEmail(email);
  };

  return (
    <div className="flex flex-col gap-8 max-w-xl w-full mx-auto">
      <h2 className="text-3xl z-20 font-semibold text-center font-quicksand">
        Sign In or Continue as Guest
      </h2>
      <div className="flex flex-col gap-6">
        <div>
          <button
            type="button"
            className="bg-white text-black font-medium text-lg p-3 flex gap-2 items-center justify-center border-2 border-black w-full"
            onClick={signInWithGoogle}
          >
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                fill="#4285F4"
                d="M14.9 8.161c0-.476-.039-.954-.121-1.422h-6.64v2.695h3.802a3.24 3.24 0 01-1.407 2.127v1.75h2.269c1.332-1.22 2.097-3.02 2.097-5.15z"
              />
              <path
                fill="#34A853"
                d="M8.14 15c1.898 0 3.499-.62 4.665-1.69l-2.268-1.749c-.631.427-1.446.669-2.395.669-1.836 0-3.393-1.232-3.952-2.888H1.85v1.803A7.044 7.044 0 008.14 15z"
              />
              <path
                fill="#FBBC04"
                d="M4.187 9.342a4.17 4.17 0 010-2.68V4.859H1.849a6.97 6.97 0 000 6.286l2.338-1.803z"
              />
              <path
                fill="#EA4335"
                d="M8.14 3.77a3.837 3.837 0 012.7 1.05l2.01-1.999a6.786 6.786 0 00-4.71-1.82 7.042 7.042 0 00-6.29 3.858L4.186 6.66c.556-1.658 2.116-2.89 3.952-2.89z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>
        <p className="text-center text-lg font-semibold">Or</p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-center">
              Continue as Guest
            </h3>
            <p className="text-center text-gray-500">
              We will send confirmation of your order to this email address.
            </p>
          </div>
          <form className="flex flex-col gap-3" onSubmit={continueAsGuest}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-200 p-2 bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md"
            >
              Continue as Guest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
