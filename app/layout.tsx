import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Krish Gupta — Full Stack & DevOps Engineer",
  description: "Portfolio of Krish Gupta — Full Stack Developer and DevOps Engineer.",
  keywords: ["Krish Gupta", "Full Stack Developer", "DevOps", "Next.js", "Docker", "Kubernetes"]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} ${mono.variable} noise`}>
        {children}
      </body>
    </html>
  );
}