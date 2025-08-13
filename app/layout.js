import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ConvexClientProvider } from "./ConvexClientProvider";



import { FloatingShapes } from "@/components/floating-shapes";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PIXXEL",
  description: "AI Image Editor App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="bg-slate-900 min-h-[2000px] text-white overflow-x-hidden">
              <FloatingShapes />
              <Toaster richColors />
              {children}
            </main>
          </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
