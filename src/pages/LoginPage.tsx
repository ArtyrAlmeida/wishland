import type React from "react";
import { useState } from "react";
import { LoginForm } from "../components/auth/forms/LoginForm";
import { RegisterForm } from "../components/auth/forms/RegisterForm";

export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleText = isLogin ? "Criar conta" : "Login";

  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  }

  return (
    <main>
      { isLogin ? <LoginForm /> : <RegisterForm /> }
      <button onClick={toggleIsLogin}>{toggleText}</button>
    </main>
  )
}