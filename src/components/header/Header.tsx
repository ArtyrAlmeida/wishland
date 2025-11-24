import { signOut } from "firebase/auth";
import type React from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <header>
      <button onClick={handleSignOut}>Sair</button>
    </header>
  )
} 