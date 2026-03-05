import { Card } from "@/components/ui/card";
import { BodyText } from "@/src/components/common/Typography";

export default function AboutQuoteCard() {
    return (
        <Card variant={"surface"} className="border border-(--color-teal) bg-(--color-badge-bg) text-center">
            <BodyText className="text-(--color-accent) italic">
                &quot;문제 해결에 집중하고, 최선의 방법을 고민하는 과정에서 개발의 즐거움을 찾습니다.&quot;
            </BodyText>
        </Card>
    );
}
