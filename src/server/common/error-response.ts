import "server-only";

import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { AppError } from "@/src/server/common/app-error";

type ErrorResponseBody = {
    error: string;
    message: string;
};

export function getErrorResponse(error: unknown, defaultMessage: string) {
    let message = "알 수 없는 오류가 발생했습니다.";
    let status = 500;

    if (error instanceof ZodError) {
        message = error.issues[0]?.message ?? "요청 검증에 실패했습니다.";
        status = 400;
    } else if (error instanceof SyntaxError) {
        message = "요청 본문 JSON 형식이 올바르지 않습니다.";
        status = 400;
    } else if (error instanceof AppError) {
        message = error.message;
        status = error.status;
    } else if (error instanceof Error) {
        message = error.message;
    }

    const body: ErrorResponseBody = {
        error: defaultMessage,
        message,
    };

    return NextResponse.json(body, { status });
}
