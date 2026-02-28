import { Card } from "@/components/ui/card";
import { BodyText } from "@/src/components/common/Typography";

export default function AboutQuoteCard() {
    return (
        <Card variant={"surface"} className="border border-(--color-teal) bg-(--color-badge-bg) text-center">
            <BodyText className="text-(--color-accent) italic">
                &quot;적극적으로 협업하며, 지속가능한 서비스를 개발합니다.&quot;
            </BodyText>
        </Card>
    );
}
