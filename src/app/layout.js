import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "@/componentes/header/Header";
import Hero from "@/componentes/hero/Hero";
import Footer from "@/componentes/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Raphael Mattos",
  description: "Professional apresentention Raphael Mattos | Dev ",
};

export default function RootLayout({ children }) {    
  return (
    <html lang="en">
      <head>       
      </head>
      <body className={inter.className}>
         {children}
         <Footer/>
      </body>
      
    </html>
  );
}
