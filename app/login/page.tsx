import type { Metadata } from "next";
import LoginForm from "@/components/Auth/LoginForm";

export const metadata: Metadata = {
  title: "Kirish — Kubo3D",
};

export default function LoginPage() {
  return <LoginForm />;
}
