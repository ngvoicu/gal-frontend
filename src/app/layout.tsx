import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GALDC - Grupul de Actiune Locala Dobrogea Centrala",
  description: "Grupul de Actiune Locala Dobrogea Centrala este un parteneriat public privat constituit conform programului LEADER",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" data-theme="corporate">
      <body className={`${roboto.className}`}>
        <div>
          {children}
        </div>

      </body>
    </html>
  );
}
