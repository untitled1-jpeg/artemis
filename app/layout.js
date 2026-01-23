import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Artemis | Independent Life Insurance Advisory",
  description: "Artemis is an independent life insurance advisory focused on personal solutions and building trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
