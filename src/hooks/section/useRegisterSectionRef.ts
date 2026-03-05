'use client'

import { RefObject, useEffect, useRef } from 'react';
import { useSectionStore } from '@/src/store/useSectionStore';

// 섹션 DOM ref를 전역 스토어에 등록/해제해 다른 컴포넌트에서 스크롤 이동에 사용할 수 있게 하는 훅
export const useRegisterSection = (
    key?: string,
    externalRef?: RefObject<HTMLElement | null>
) => {
    const internalRef = useRef<HTMLElement>(null);
    const sectionRef = externalRef ?? internalRef;
    const setRef = useSectionStore((state) => state.setRef);

    useEffect(() => {
        if (!key) return;

        if (sectionRef.current) {
            setRef(key, sectionRef.current);
        }
        return () => setRef(key, null);
    }, [key, sectionRef, setRef]);

    return sectionRef;
};
