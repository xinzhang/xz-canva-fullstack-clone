
import "./globals.css";
import NextAuthProvider from "@/providers/nextAuthProvider";

export const metadata = {
  title: "Canva clone",
  description: "full stack canva clone with nextjs and micro services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
