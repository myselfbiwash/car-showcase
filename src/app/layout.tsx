import "./globals.css";

import { Footer1, NavBar1 } from "@/components/component/index";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar1 />
        {children}
        <Footer1 />
      </body>
    </html>
  );
}