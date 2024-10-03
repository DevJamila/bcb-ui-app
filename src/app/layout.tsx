import type { Metadata } from "next";
import localFont from "next/font/local";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const quicksand = Quicksand({subsets: ['latin']});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Big Chat Brasil",
  description: "Send SMS Messages Quickly and Easily",
};

function BCBHeader() {
  return (
    <header className="h-28 w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 items-center border-b-2 border-b-bcbgreen">

      <a className="hidden md:block text-base lg:text-xl text-bcbgreen hover:text-amber-500 font-bold justify-self-start" href="https://github.com/DevJamila/bcb-ui-app" target="_blank">GitHub</a>

      <Image className="block md:hidden justify-self-center" src="/logo-bcb.png" width={120} height={54} alt="Logotipo Big Chat Brasil" />
      <Image className="hidden md:block justify-self-center" src="/logo-bcb.png" width={180} height={81} alt="Logotipo Big Chat Brasil" />

      <p className="hidden md:block text-base lg:text-xl text-stone-600 justify-self-end"> Developed by 
        <a className="font-bold text-bcbgreen hover:text-amber-500" 
          href="https://wa.me/5544997607151" target="_blank" > Jamila
        </a>
      </p>

    </header>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={quicksand.className}>
        <BCBHeader/>
        <div className="w-11/12 lg:w-10/12 mx-auto flex-col items-center py-12">
          {children}
        </div>
      </body>
    </html>
  );
}
