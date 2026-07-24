import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kubo3D — 3D & AI Studio for Ecommerce",
  description:
    "Turn product photos and videos into interactive 3D models, AR previews and AI-generated imagery. Capture, create and convert in hours, not weeks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
