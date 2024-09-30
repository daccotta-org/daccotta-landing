import "./globals.css";
import favicon from "../assets/favicon.ico";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daccotta | The Social Network For Movie Lovers",
  description:
    "Daccotta is a social network for movie lovers. Create lists, journal your movie experiences, get personalized recommendations, and connect with fellow film enthusiasts.",
  keywords:
    "movies, social network, film, cinema, movie lists, movie journal, recommendations",
  openGraph: {
    title: "Daccotta | The Social Network For Movies",
    description:
      "Connect with movie lovers, create lists, and journal your film experiences.",
    url: "https://www.daccotta.com", // Replace with your actual URL
    siteName: "daccotta",

    images: [
      {
        url: "/dacotta-banner.png", // Path relative to the 'public' folder
        alt: "daccotta - The Social Network For Movie Lovers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@daccotta", // Replace with your Twitter handle
    creator: "@daccotta",
    title: "Daccotta | The Social Network For Movies",
    description:
      "Discover, share, and connect through your love of cinema. Create lists, journal entries, and get personalized movie recommendations.",
    images: ["/dacotta-banner.png"], // Path relative to the 'public' folder
  },
  other: {
    "linkedin:card": "summary_large_image",
    "linkedin:title": "Daccotta | Connect Through Cinema",
    "linkedin:description":
      "Join Daccotta to create movie lists, journal your film experiences, and get personalized recommendations. The ultimate social network for movie enthusiasts.",
    "linkedin:image": "/dacotta-banner.png",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Daccotta | The Social Network For Movie Lovers</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta
          name="google-site-verification"
          content="B6tdC5ZJRoLJdb9oJ_YP85QgqByEx1Wc4cwfCrNPY08"
        />
        <meta
          name="image"
          property="og:image"
          content="/daccotta-banner.png"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
