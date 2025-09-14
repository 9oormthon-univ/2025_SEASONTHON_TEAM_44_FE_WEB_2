import { z } from "zod";

export const getStampMainResponseSchema = z.object({
  response: z.object({
    count: z.number(),
    storeList: z.array(
      z.object({
        storeId: z.number(),
        storeName: z.string(),
        imageUrl: z.string(),
        lastVisit: z.string(),
        visitCount: z.number(),
        availableStamp: z.number(),
        hasNewNoti: z.boolean(),
      })
    ),
  }),
});

export type GetStampMainResponseSchema = z.infer<
  typeof getStampMainResponseSchema
>;

export const getStampStoreDetailResponseSchema = z.object({
  response: z.object({
    storeId: z.number(),
    storeName: z.string(),
    introduction: z.string(),
    phone: z.string(),
    address: z.string(),
    detailAddress: z.string(),
    open: z.string(),
    close: z.string(),
    imageUrl: z.string(),
    availableStamp: z.number(),
    latestNoti: z.object({
      id: z.number(),
      title: z.string(),
      content: z.string(),
      createdAt: z.string(),
    }),
  }),
});

export type GetStampStoreDetailResponseSchema = z.infer<
  typeof getStampStoreDetailResponseSchema
>;

export const getStampCouponsResponseSchema = z.object({
  response: z.array(
    z.object({
      stampId: z.number(),
      storeId: z.number(),
      storeName: z.string(),
      storeImage: z.string(),
      availableStamp: z.number(),
      couponCount: z.number(),
      stampsLeft: z.number(),
    })
  ),
});

export type GetStampCouponsResponseSchema = z.infer<
  typeof getStampCouponsResponseSchema
>;

export const CouponType = {
  OWNED: "OWNED",
  SCHEDULED: "SCHEDULED",
} as const;

export type CouponType = (typeof CouponType)[keyof typeof CouponType];

// POST /api/stamps/{stampId}/coupon 응답 스키마
export const postStampCouponUseResponseSchema = z.object({
  response: z.object({
    id: z.number(),
  }),
});

export type PostStampCouponUseResponseSchema = z.infer<
  typeof postStampCouponUseResponseSchema
>;

// GET /api/stamps/me/summary 응답 스키마 (마이페이지)
export const getStampMypageResponseSchema = z.object({
  response: z.object({
    storeCount: z.number(),
    totalStamp: z.number(),
    couponCount: z.number(),
    recentStores: z.array(
      z.object({
        storeId: z.number(),
        storeName: z.string(),
        storeImage: z.string(),
        availableStamp: z.number(),
        lastVisitDate: z.string(),
      })
    ),
  }),
});

export type GetStampMypageResponseSchema = z.infer<
  typeof getStampMypageResponseSchema
>;

export const SortOption = {
  STAMP: "STAMP",
  OLDEST: "OLDEST",
  NEWEST: "NEWEST",
  LAST_VISIT: "LAST_VISIT",
} as const;

export type SortOption = (typeof SortOption)[keyof typeof SortOption];
