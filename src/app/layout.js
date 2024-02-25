"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/componentes/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/componentes/header/Header";
import Formacao from "@/componentes/formacao/Formacao";
import Trabalhos from "@/componentes/trabalhos/Trabalhos";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {    

  return (
    <html lang="en">
      <head>  
        <script src= "/assets/js/bootstrap.min.js" defer/>        
      </head>
      <body className={inter.className}>
            <main className="container-fluid">      
                <Header>  
                {children}
                {!! children && 
                  <div className={""}>
                    <Formacao />
                    <Trabalhos/>
                  </div>    
                }      
                </Header>
          </main>
         
         <SpeedInsights />
         <Footer/>
      </body>
      
    </html>
  );
}
