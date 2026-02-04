import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import React from "react";

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    style: ["normal", "italic"],
});

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
        <body className={`${openSans.variable} antialiased font-sans`}>
        <Header />
        {children}
        </body>
        </html>
    );
}