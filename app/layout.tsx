import "./globals.css";
import "./../styles/globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import ProgressBar from "@/components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = 
  {
    title: "Rakini - Software Development Company | Rakini Softech Pvt Ltd",
    description:
      "We craft innovative software solutions that drive business growth and enhance user experiences.",
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ProgressBar/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
