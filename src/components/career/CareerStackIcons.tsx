import Image from 'next/image';
import {stackMeta} from '@/src/types/stack';
import type {StackName} from '@/src/types/stack';

const STACK_ICON_SIZE = 28;
const ICON_SUFFIX = '\uC544\uC774\uCF58';

interface CareerStackIconsProps {
    company: string;
    stack: readonly StackName[];
}

export default function CareerStackIcons({company, stack}: CareerStackIconsProps) {
    return (
        <div className="flex items-center gap-2">
            {stack.map((stackName) => {
                const currentStack = stackMeta[stackName];

                return (
                    <Image
                        key={`${company}-${stackName}`}
                        src={currentStack.img}
                        alt={`${stackName} ${ICON_SUFFIX}`}
                        width={STACK_ICON_SIZE}
                        height={STACK_ICON_SIZE}
                        className="rounded-sm"
                    />
                );
            })}
        </div>
    );
}
