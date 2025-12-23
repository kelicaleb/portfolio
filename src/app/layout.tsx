import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caleb | Full Stack Developer & ML Engineer",
  description: "Full Stack Developer and Machine Learning Engineer specializing in Next.js, Python, PyTorch, PostgreSQL, and MySQL. Currently working at Accord.",
  keywords: ["Full Stack Developer", "Machine Learning", "Next.js", "Python", "PyTorch", "PostgreSQL", "MySQL", "React", "Tailwind CSS"],
  authors: [{ name: "Caleb" }],
  openGraph: {
    title: "Caleb | Full Stack Developer & ML Engineer",
    description: "Full Stack Developer and Machine Learning Engineer specializing in Next.js, Python, and modern technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
