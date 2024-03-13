import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/ecyce/footer";
import Navbar from "./components/ecyce/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Set & Forget",
  description: "Challenge everything",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} poppins`}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
