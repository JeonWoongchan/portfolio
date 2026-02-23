import type {Metadata} from "next";
import "./globals.css";
import Header from "@/src/components/header/Header";
import React from "react";

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
        <body className="antialiased font-['Pretendard']">
        <Header />
        {children}
        </body>
        </html>
    );
}
