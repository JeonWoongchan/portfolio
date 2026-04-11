import { NextResponse } from "next/server";

import { getErrorResponse } from "@/src/server/common/error-response";
import {
    syncPageVisitAndGetCount,
} from "@/src/server/page-visit/page-visit.service";
import { pageVisitPayloadSchema } from "@/src/validators/page-visits";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const payload = pageVisitPayloadSchema.parse(body);
        const data = await syncPageVisitAndGetCount(payload);

        return NextResponse.json(
            {
                data,
            },
            {
                status: 200,
            }
        );
    } catch (error) {
        return getErrorResponse(error, "page_visits 동기화에 실패했습니다.");
    }
}
