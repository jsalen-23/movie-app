import LoginForm from "@/components/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieAPP | Login",
  description: "MovieAPP is a movie database app",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center pt-20 px-4">
      <LoginForm />
    </div>
  );
}