import type {Metadata} from "next";
import type { ReactNode } from 'react';
import "./globals.css";
import AppProviders from "@/src/components/common/AppProviders";
import PageVisitSync from "@/src/components/common/PageVisitSync";
import Header from "@/src/components/header/Header";
import ScrollSnapController from "@/src/components/common/ScrollSnapController";

export const metadata: Metadata = {
    title: "전웅찬 포트폴리오 사이트",
    description: "프론트엔드 개발자 전웅찬의 포트폴리오 사이트입니다.",
    icons: {
        icon: "/brand-signature.svg",
        shortcut: "/brand-signature.svg",
        apple: "/brand-signature.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="ko">
        <body className="antialiased font-['Pretendard']">
            <AppProviders>
                <PageVisitSync />
                <ScrollSnapController/>
                <Header />
                {children}
            </AppProviders>
        </body>
        </html>
    );
}
