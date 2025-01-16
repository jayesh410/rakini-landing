import "./globals.css";
import "./../styles/globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://rakinisoftech.vercel.app"),
  title: "Rakini - Software Development Company | Rakini Softech Pvt Ltd",
  description:
    "We craft innovative software solutions that drive business growth and enhance user experiences.",
  openGraph: {
    title: "Rakini - Software Development Company",
    description:
      "Innovative software solutions that empower businesses with exceptional technology and user experiences.",
    url: "https://rakinisoftech.vercel.app",
    siteName: "Rakini Softech Pvt Ltd",
    keywords: [
      "Software Development Company",
      "Rakini Softech",
      "Custom Software Solutions",
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "DevOps Services",
    ],
    images: [
      {
        url: "/logo-rakini.png",
        width: 1200,
        height: 630,
        alt: "Rakini Softech - Empowering Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakini - Software Development Company",
    description:
      "Custom software solutions that drive business growth and enhance user experiences.",
    images: ["/logo-rakini.png"],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
