import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './robotics.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ainubox1.duncanli.chatgpt.site'),
  title: '敦叡科技｜服務型機器人與 AI 解決方案',
  description: '敦叡科技提供服務型機器人、智慧配送、多機協作與 AI 場域整合，協助飯店、醫療、商辦與零售提升服務效率。',
  openGraph: {
    title: '敦叡科技｜讓機器人加入你的服務團隊',
    description: '服務型機器人、智慧配送、多機協作與 AI 場域整合。',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '敦叡科技服務型機器人與 AI 解決方案' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '敦叡科技｜讓機器人加入你的服務團隊',
    description: '服務型機器人、智慧配送、多機協作與 AI 場域整合。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
