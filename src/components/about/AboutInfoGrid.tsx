import ABOUT_DATA from "@/data/about";
import { GridContainer } from "@/src/components/common/Container";
import InfoCard from "@/src/components/about/InfoCard";

export default function AboutInfoGrid() {
    return (
        <GridContainer className="h-full items-stretch justify-items-stretch">
            {ABOUT_DATA.map((data) => (
                <li key={data.id} className="h-full">
                    <InfoCard
                        icon={data.icon}
                        title={data.title}
                        description={data.description}
                    />
                </li>
            ))}
        </GridContainer>
    );
}
