import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-prose",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagar Dubile // Console",
  description: "Sagar Dubile's portfolio - AI/ML, Security, and Blockchain Engineer. Building systems that work in the real world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-prose)' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .status-bar, .nav-item, .panel-label, .status-strip, .hero-actions a,
          .service-type, .service-links a, .service-readout, .tag, .exp-meta, .exp-bullets li::before,
          .stack-row, .cred-list li::before, .terminal-contact, .btn-submit, .footer {
            font-family: var(--font-mono);
          }
        `}} />
        {children}
        <div className="grid-bg"></div>
      </body>
    </html>
  );
}
