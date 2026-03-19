import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Sagar Ramesh Dubile — AI/ML · Data Science · Blockchain',
    description:
        'Portfolio of Sagar Ramesh Dubile — AI/ML Engineer, Data Scientist & Blockchain Developer building intelligent decentralized systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
