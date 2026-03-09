import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emshuvo.com"),
  title: "Evan Mahmud Shuvo | Cloud Security, SysAdmin, AI, Business Growth & Digitalization Expertise",
  description: "Cloud Security Engineer, System Administrator, and Full-Stack Developer based in Toronto, Ontario, Canada. CEO of Aimlake Inc. & Capitalizedmoney Inc. Specializing in secure, scalable, and AI-powered infrastructures.",
  keywords: [
    "Cloud Security Engineer",
    "System Administrator",
    "Full-Stack Developer",
    "Cybersecurity",
    "DevOps",
    "AI Automation",
    "Toronto",
    "Aimlake Inc",
    "Capitalizedmoney Inc",
    "Evan Mahmud Shuvo"
  ],
  authors: [{ name: "Evan Mahmud Shuvo" }],
  creator: "Evan Mahmud Shuvo",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://emshuvo.com",
    title: "Evan Mahmud Shuvo – Cybersecurity & Tech Entrepreneur",
    description: "Founder of Aimlake Inc. | Cybersecurity | Web & App Development | Automotive Tech | Cloud Solutions | Toronto.",
    siteName: "Evan Mahmud Shuvo",
    images: [
      {
        url: "https://emshuvo.com/EmShuvo.png",
        width: 1200,
        height: 630,
        alt: "Evan Mahmud Shuvo - Cloud Security Engineer & Full-Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evan Mahmud Shuvo – Cybersecurity & Tech Entrepreneur",
    description: "Founder of Aimlake Inc. | Cybersecurity | Web & App Development | Cloud Tech | Toronto.",
    images: ["https://emshuvo.com/EmShuvo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        {/* Additional Open Graph Meta Tags for WhatsApp compatibility */}
        <meta property="og:title" content="Evan Mahmud Shuvo – Cybersecurity & Tech Entrepreneur" />
        <meta property="og:description" content="Founder of Aimlake Inc. | Cybersecurity | Web & App Development | Automotive Tech | Cloud Solutions | Toronto." />
        <meta property="og:image" content="https://emshuvo.com/EmShuvo.png" />
        <meta property="og:image:secure_url" content="https://emshuvo.com/EmShuvo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Evan Mahmud Shuvo - Cloud Security Engineer & Full-Stack Developer" />
        <meta property="og:url" content="https://emshuvo.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evan Mahmud Shuvo – Cybersecurity & Tech Entrepreneur" />
        <meta name="twitter:description" content="Founder of Aimlake Inc. | Cybersecurity | Web & App Development | Cloud Tech | Toronto." />
        <meta name="twitter:image" content="https://emshuvo.com/EmShuvo.png" />
        <meta name="twitter:image:src" content="https://emshuvo.com/EmShuvo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Evan Mahmud Shuvo",
              jobTitle: ["Cloud Security Engineer", "System Administrator", "Full-Stack Developer"],
              image: "https://emshuvo.com/EmShuvo.png",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Aimlake Inc.",
                  jobTitle: "CEO & Founder"
                },
                {
                  "@type": "Organization",
                  name: "Capitalizedmoney Inc.",
                  jobTitle: "CEO & Founder"
                }
              ],
              email: ["emshuvo@aimlake.com", "emshuvo@capitalizedmoney.com"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA"
              },
              sameAs: []
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-zinc-950 text-zinc-50 bg-mesh selection:bg-blue-500/30 selection:text-white antialiased`}>
        <Header />
        <main className="relative z-10 w-full min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

