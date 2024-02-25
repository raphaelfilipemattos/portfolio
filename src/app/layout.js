"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/componentes/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Header from "@/componentes/header/Header";
import Formacao from "@/componentes/formacao/Formacao";
import Trabalhos from "@/componentes/trabalhos/Trabalhos";
import Experiencias from "@/componentes/experiencias/Experiencas";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) { 
 
  return (
    <html lang="en">
      <head>  
        <title>Raphael Mattos | Dev</title>
        <meta name="description" content="Software solutions for your company. I make websites and/or software to make your life easier." />
        <meta name="googlebot" content="all" />
        <meta name="robots" content="all"/>
        <script src= "/assets/js/bootstrap.min.js" defer/>   
             
      </head>
      <body className={inter.className}>
            <main className="container-fluid">                      
                <Header>  
                    <div className="">
                      <Formacao />
                      <Trabalhos />
                      <Experiencias/>
                    </div>
                  
                </Header>
          </main>
         
         <SpeedInsights />
         <Analytics/>
         <Footer/>
      </body>
      
    </html>
  );
}
