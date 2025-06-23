import { HttpResponse, http } from 'msw';

import type { PagedList, UserResponse } from '@/types/api';

import { db } from '../db';
import { networkDelay } from '../utils';

export const usersHandlers = [
  http.get('/api/v1/users', async ({ request }) => {
    await networkDelay();

    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = Number(url.searchParams.get('pageSize') || 10);

    const totalCount = db.user.count();
    const totalPages = Math.ceil(totalCount / pageSize);

    const items = db.user
      .findMany({
        take: pageSize,
        skip: pageSize * (page - 1),
      })
      .map((user) => {
        return {
          userId: user.id,
          email: user.email,
          roles: user.roles ? JSON.parse(user.roles) : [],
        } as UserResponse;
      });

    const response: PagedList<UserResponse> = {
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
