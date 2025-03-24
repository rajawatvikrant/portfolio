import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/style.css";
import Favicon from "../public/images/favicon.png"
import Head from "next/head";

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});


export const metadata = {
  title: "Vikrant - WebDev",
  description: "Vikrant Rajawat portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
