import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Gateway Networks | Experience Ultra-Fast Internet',
  description: 'Gateway Networks provides customized telecommunication solutions with seamless connectivity and unlimited possibilities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body suppressHydrationWarning className="bg-black text-white antialiased relative min-h-screen">
        <div className="liquid-bg" aria-hidden="true" />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
