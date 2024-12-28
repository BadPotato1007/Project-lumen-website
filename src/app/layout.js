import "./globals.css";

export const metadata = {
  title: "Project Lumen - Redefining Sustainable Aviation",
  description:
    "Project Lumen aims to revolutionize flight with a solar-powered RC plane, blending innovation and sustainability for a brighter future in aviation.",
  openGraph: {
    title: "Project Lumen - Redefining Sustainable Aviation",
    description:
      "Join us in shaping the future of aviation with our solar-powered RC plane designed for efficiency and minimal environmental impact.",
    url: "https://projectlumen.com",
    siteName: "Project Lumen",
    // fix l8r
    images: [
      {
        url: "/lumen-logo.png",
        width: 1200,
        height: 630,
        alt: "Project Lumen - Solar Powered RC Plane",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Project Lumen Team" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="solar-powered RC plane, sustainable aviation, clean energy, innovative flight" />

        <link rel="icon" type="image/svg+xml" href="/project-lumen-icon.svg" />

        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
