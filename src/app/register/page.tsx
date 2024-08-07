import RegisterForm from "@/components/register-form";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieAPP | Register",
  description: "MovieAPP is a movie database app",
};

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center pt-20">
      <RegisterForm />
    </div>
  );
}