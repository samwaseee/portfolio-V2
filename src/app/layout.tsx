import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Samiur Rahman Wasee | Full Stack Developer",
  description: "Personal portfolio of Samiur Rahman Wasee, a Full Stack Developer and ML researcher based in Chattogram.",
  keywords: ["Samiur Rahman Wasee", "Full Stack Developer", "Software Engineer", "MERN Stack", "Next.js", "Portfolio", "Chattogram"],
  authors: [{ name: "Samiur Rahman Wasee" }],
  creator: "Samiur Rahman Wasee",
  openGraph: {
    title: "Samiur Rahman Wasee | Full Stack Developer",
    description: "Personal portfolio of Samiur Rahman Wasi, a Full Stack Web Developer and ML researcher.",
    url: "https://samiur-rahman-wasee.vercel.app",
    siteName: "Samiur Rahman Wasee Portfolio",
    images: [
      {
        url: "/images/about_Img.jpg",
        width: 1200,
        height: 630,
        alt: "Samiur Rahman Wasee Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samiur Rahman Wasee | Full Stack Developer",
    description: "Full Stack Developer & AI Researcher",
    images: ["/images/about_Img.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-slate-200">
        {children}
      </body>
    </html>
  );
}