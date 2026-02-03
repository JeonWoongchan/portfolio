import { useEffect, useRef } from 'react';
import {useSectionStore} from '@/src/store/useSectionStore';

// 컴포넌트 ref를 store에 저장
export const useRegisterSection = (key: string) => {
    const sectionRef = useRef<HTMLElement>(null);
    const setRef = useSectionStore((state) => state.setRef);

    useEffect(() => {
        if (sectionRef.current) {
            setRef(key, sectionRef.current);
        }
        return () => setRef(key, null);
    }, [key, setRef]);

    return sectionRef;
};