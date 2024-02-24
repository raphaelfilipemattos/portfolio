import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/componentes/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Raphael Mattos",
  description: "Professional apresentention Raphael Mattos | Dev ",
};

export default function RootLayout({ children }) {    

  return (
    <html lang="en">
      <head>  
        <script src= "/assets/js/bootstrap.min.js" defer/>
      </head>
      <body className={inter.className}>
         {children}
         <SpeedInsights />
         <Footer/>
      </body>
      
    </html>
  );
}
