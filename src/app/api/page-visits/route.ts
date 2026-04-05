import { NextResponse } from "next/server";
import { ZodError } from "zod";

import {
    createOrGetPageVisit,
    getPageVisitCountByDate,
} from "@/src/services/page-visits.service";
import {
    pageVisitPayloadSchema,
} from "@/src/validators/page-visits";

function getErrorResponse(error: unknown, defaultMessage: string) {
    if (error instanceof ZodError) {
        return NextResponse.json(
            {
                error: defaultMessage,
                message: error.issues[0]?.message ?? "요청 검증에 실패했습니다.",
            },
            {
                status: 400,
            }
        );
    }

    const message =
        error instanceof Error
            ? error.message
            : "알 수 없는 오류가 발생했습니다.";
    const status =
        message.includes("필수") ||
        message.includes("형식") ||
        message.includes("필요")
            ? 400
            : 500;

    return NextResponse.json(
        {
            error: defaultMessage,
            message,
        },
        {
            status,
        }
    );
}

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
