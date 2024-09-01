import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Drefitness Admin",
  description: "A management system designed to manage gym memebership ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
