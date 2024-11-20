import { prisma } from "../prisma.service";
import { HistoryFilters } from "../types";

const createHistory = async (data: {
  action: string;
  productId: number;
  date: Date;
  plu: string;
  shopId: number;
}) => {
  return prisma.history.create({
    data: {
      ...data,
      shopId: data.shopId ?? null,
    },
  });
};

const getHistory = async (filters: HistoryFilters) => {
  const { shopId, plu, startDate, endDate, action, skip, take } = filters;

  return prisma.history.findMany({
    where: {
      shopId: shopId,
      plu: plu,
      action: action,
      date: {
        gte: startDate,
        lte: endDate,
      },
    },
    skip: skip,
    take: take,
    orderBy: {
      date: "desc",
    },
  });
};

export default {
  createHistory,
  getHistory,
};
