'use client'

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { CareerItem } from '@/src/types/career';

interface CareerCardContextValue {
    item: CareerItem;
}

const CareerCardContext = createContext<CareerCardContextValue | null>(null);

interface CareerCardProviderProps {
    item: CareerItem;
    children: ReactNode;
}

export function CareerCardProvider({ item, children }: CareerCardProviderProps) {
    return (
        <CareerCardContext.Provider value={{ item }}>
            {children}
        </CareerCardContext.Provider>
    );
}

export function useCareerCardItem() {
    const context = useContext(CareerCardContext);

    if (!context) {
        throw new Error('useCareerCardItem은 CareerCardProvider 내부에서만 사용해야 합니다.');
    }

    return context.item;
}
