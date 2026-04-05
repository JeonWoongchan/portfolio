import { z } from "zod";

const VISITED_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const visitedDateSchema = z
    .string()
    .regex(VISITED_DATE_PATTERN, "visitedDate는 YYYY-MM-DD 형식이어야 합니다.");

const visitedAtSchema = z
    .string()
    .datetime({ message: "visitedAt은 유효한 ISO 날짜 문자열이어야 합니다." });

// GET query 검증
export const pageVisitQuerySchema = z.object({
    visitedDate: visitedDateSchema,
    visitorId: z.string().min(1).optional(),
});

// POST payload 검증
export const pageVisitPayloadSchema = z
    .object({
        visitorId: z.string().min(1, "visitorId 필드는 필수입니다."),
        visitedAt: visitedAtSchema.optional(),
        visitedDate: visitedDateSchema.optional(),
    })
    .transform((value) => {
        const visitedAt = value.visitedAt ?? new Date().toISOString();
        const visitedDate = value.visitedDate ?? visitedAt.slice(0, 10);

        return {
            visitedAt,
            visitedDate,
            visitorId: value.visitorId,
        };
    });

export type PageVisitQuery = z.infer<typeof pageVisitQuerySchema>;
export type PageVisitPayload = z.infer<typeof pageVisitPayloadSchema>;
