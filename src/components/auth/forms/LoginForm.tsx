import { signInWithEmailAndPassword } from "firebase/auth";
import type React from "react";
import { useState } from "react";
import { auth } from "../../../config/firebase";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  console.log(auth.currentUser);
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
