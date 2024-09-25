import "./globals.css";
import favicon from "../assets/favicon.ico";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>Daccotta</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
