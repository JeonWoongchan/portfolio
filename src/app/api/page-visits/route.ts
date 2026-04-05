import { NextResponse } from "next/server";

import { getErrorResponse } from "@/src/server/common/error-response";
import {
    createOrGetPageVisit,
    getPageVisitCountByDate,
} from "@/src/server/page-visit/page-visit.service";
import { pageVisitPayloadSchema } from "@/src/validators/page-visits";

export async function GET() {
    try {
        const count = await getPageVisitCountByDate();

        return NextResponse.json(
            {
                data: {
                    count,
                },
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return getErrorResponse(error, "page_visits 조회에 실패했습니다.");
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const payload = pageVisitPayloadSchema.parse(body);
        const data = await createOrGetPageVisit(payload);

        return NextResponse.json(
            {
                data,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return getErrorResponse(error, "page_visits 생성에 실패했습니다.");
    }
}

