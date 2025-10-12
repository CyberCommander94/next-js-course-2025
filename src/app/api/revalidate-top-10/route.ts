import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

import { REVALIDATE_TOP_10_TAG } from '@/constants';

export function GET() {
  revalidateTag(REVALIDATE_TOP_10_TAG);

  return NextResponse.json({ status: 200 });
}
