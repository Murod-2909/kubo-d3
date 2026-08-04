import type { Metadata } from "next";
import RegisterForm from "@/components/Auth/RegisterForm";

export const metadata: Metadata = {
  title: "Ro'yxatdan o'tish — Kubo3D",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
