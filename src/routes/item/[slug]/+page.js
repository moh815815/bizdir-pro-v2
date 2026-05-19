import { listings } from '$lib/data/store.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const listing = listings.find(l => l.slug === params.slug);
  if (!listing) throw error(404, 'الصفحة غير موجودة');
  return { listing };
}

export function entries() {
  return listings.map(l => ({ slug: l.slug }));
}
