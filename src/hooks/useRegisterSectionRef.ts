'use client'

import { RefObject, useEffect, useRef } from 'react';
import {useSectionStore} from '@/src/store/useSectionStore';

// 컴포넌트 ref를 store에 저장
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
