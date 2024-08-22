import { Inter } from "next/font/google";

import "@/app/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "A modern portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A modern portfolio showcasing my projects and skills."
        />
        <meta
          name="keywords"
          content="portfolio, web developer, projects, skills, frontend developer"
        />
        <meta name="author" content="Hüseyin ASLAN" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="relative z-10 overflow-hidden px-3 min-h-screen bg-primary-light antialiased font-Montserrat dark:bg-gray-900 dark:text-white">
            <div className="w-full h-full">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
