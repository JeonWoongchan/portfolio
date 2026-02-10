import type { Metadata } from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import Header from "@/src/components/header/Header";
import React from "react";

// const openSans = Open_Sans({
//     variable: "--font-open-sans",
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "600"],
//     style: ["normal", "italic"],
// });

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: "전웅찬 포트폴리오",
    description: "프론트엔드 개발자 포트폴리오 사이트",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className={`${inter.className} antialiased font-sans`}>
        <Header />
        {children}
        </body>
        </html>
    );
}