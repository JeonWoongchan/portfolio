import type {Metadata} from "next";
import type { ReactNode } from 'react';
import "./globals.css";
import Header from "@/src/components/header/Header";

export const metadata: Metadata = {
    title: "전웅찬 포트폴리오 사이트",
    description: "프론트엔드 개발자 전웅찬의 포트폴리오 사이트입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
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
