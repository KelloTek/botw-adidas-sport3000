import type { Metadata } from "next";
import "@/styles/globals.css";
import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export const metadata: Metadata = {
  title: "Sport 3000 - Adidas",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scrollbar-hide">
      <body>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
