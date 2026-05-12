import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { globalSettingsQuery } from "@/sanity/lib/queries";

export async function generateMetadata() {
  const settings = await client.fetch(globalSettingsQuery);

  const title = settings?.shareTitle || "Artemis | Independent Life Insurance Advisory";
  const description = settings?.shareDescription || "Artemis is an independent life insurance advisory focused on personal solutions and building trust.";
  const ogImage = settings?.shareImage || "/images/img_team-home.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning>
        <CustomCursor />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
