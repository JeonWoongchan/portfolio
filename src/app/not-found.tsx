import Link from 'next/link';
import BrandSignature from '@/src/components/common/BrandSignature';

export default function NotFound() {
    return (
        <main
            className="relative flex min-h-screen flex-col items-center justify-center bg-(--color-navy) font-['Pretendard'] select-none overflow-hidden"
        >
            <div className="relative mb-6 flex items-center justify-center">
                <span className="text-[10rem] md:text-[16rem] font-bold leading-none text-(--color-accent) opacity-[0.07] pointer-events-none">
                    404
                </span>
                <span className="absolute text-6xl md:text-8xl font-bold text-(--color-accent)">
                    404
                </span>
            </div>

            <h1 className="mb-3 text-xl md:text-2xl font-bold text-white">
                페이지를 찾을 수 없어요
            </h1>
            <p className="mb-10 text-center text-sm md:text-base text-(--color-text-content) px-6">
                요청하신 페이지가 존재하지 않거나 이동되었을 수 있어요.
            </p>

            <Link
                href="/"
                className="rounded-full border border-(--color-accent)/40 bg-(--color-accent)/10 px-6 py-2.5 text-sm font-semibold text-(--color-accent) transition-all duration-200 hover:bg-(--color-accent)/20 hover:border-(--color-accent)/70"
            >
                홈으로 돌아가기
            </Link>

            <div className="absolute bottom-8">
                <BrandSignature nameClassName="text-sm text-(--color-text-muted)" />
            </div>
        </main>
    );
}
