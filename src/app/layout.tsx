import type { Metadata } from "next";
import { Cinzel } from 'next/font/google';
import NavBar from "./components/NavBar";
import { FavoritesProvider } from "./context/FavoritesContext";
import { PreferredHouseProvider } from "./context/PreferredHouseContext";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '900'], // Specify the weights you need
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Harry Potter Mischief Managed",
  description: "Explore the magical world of Harry Potter!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cinzel.className}>

      <body>
        <FavoritesProvider>
          <NavBar />
          <PreferredHouseProvider>{children}</PreferredHouseProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
