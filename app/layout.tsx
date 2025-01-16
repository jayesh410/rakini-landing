import "./globals.css";
import "./../styles/globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import ProgressBar from "@/components/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rakini - Software Development Company | Rakini Softech Pvt Ltd",
  description:
    "We craft innovative software solutions that drive business growth and enhance user experiences.",
  keywords: [
    "Software Development Company",
    "Rakini Softech",
    "Custom Software Solutions",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "DevOps Services",
  ],
  authors: [{ name: "Rakini Softech Pvt Ltd", url: "https://rakini.com" }],
  openGraph: {
    title: "Rakini - Software Development Company",
    description:
      "Innovative software solutions that empower businesses with exceptional technology and user experiences.",
    url: "https://rakini.com",
    siteName: "Rakini Softech Pvt Ltd",
    images: [
      {
        url: "/images/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Rakini Softech - Empowering Businesses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakini - Software Development Company",
    description:
      "Custom software solutions that drive business growth and enhance user experiences.",
    images: ["/images/twitter-card.jpg"], 
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rakini.com",
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
        <ProgressBar/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
