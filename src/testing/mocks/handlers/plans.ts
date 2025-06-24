import { HttpResponse, http } from 'msw';

import { db } from '../db';
import { networkDelay } from '../utils';

export const plansHandlers = [
  http.get('/api/v1/plans', async ({ request }) => {
    networkDelay();

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = Number(url.searchParams.get('pageSize') || 10);

    const totalCount = db.plan.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    const items = db.plan.findMany({
      take: pageSize,
      skip: pageSize * (page - 1),
    });

    const response = {
      items: items,
      pageNumber: page,
      totalPages: totalPages,
      totalCount: totalCount,
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    };

    return HttpResponse.json(response);
  }),
];
