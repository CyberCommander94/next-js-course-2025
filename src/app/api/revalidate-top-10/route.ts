import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

import { TOP_10_REQUEST_TAG } from '@/constants';

export function GET() {
  revalidateTag(TOP_10_REQUEST_TAG);

  return NextResponse.json({ status: 200 });
}
