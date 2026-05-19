<script>
  export let listing;

  const priceColor = { '$': 'text-emerald-600', '$$': 'text-blue-600', '$$$': 'text-amber-600', '$$$$': 'text-rose-600' };
</script>

<a
  href="/item/{listing.slug}"
  class="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-gold-200 transition-all duration-300 hover:-translate-y-1"
>
  <!-- Image -->
  <div class="relative h-48 overflow-hidden bg-slate-100">
    <img
      src={listing.image}
      alt={listing.name}
      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      loading="lazy"
    />
    <!-- Badges -->
    <div class="absolute top-3 right-3 flex gap-2">
      {#if listing.verified}
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500 text-white text-xs font-arabic font-medium rounded-full">
          ✓ موثّق
        </span>
      {/if}
      {#if listing.featured}
        <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-gold-500 text-white text-xs font-arabic font-medium rounded-full">
          ⭐ مميّز
        </span>
      {/if}
    </div>
    <!-- Category pill -->
    <div class="absolute bottom-3 left-3">
      <span class="px-3 py-1 bg-black/60 text-white text-xs font-arabic rounded-full backdrop-blur-sm">
        {listing.subcategory}
      </span>
    </div>
  </div>

  <!-- Content -->
  <div class="p-5">
    <div class="flex items-start justify-between gap-2 mb-2">
      <h3 class="font-arabic font-bold text-slate-900 text-base leading-snug group-hover:text-gold-700 transition-colors line-clamp-1">
        {listing.name}
      </h3>
      <span class="shrink-0 text-sm font-bold {priceColor[listing.priceRange] ?? 'text-slate-500'}">
        {listing.priceRange}
      </span>
    </div>

    <p class="font-arabic text-slate-500 text-sm leading-relaxed line-clamp-2 mb-3">
      {listing.description}
    </p>

    <!-- Meta row -->
    <div class="flex items-center justify-between text-xs text-slate-400 font-arabic border-t border-slate-50 pt-3">
      <span class="flex items-center gap-1">
        <span>📍</span> {listing.city}
      </span>
      <span class="flex items-center gap-1">
        <span class="text-gold-500">★</span>
        <strong class="text-slate-700">{listing.rating}</strong>
        <span>({listing.reviewCount})</span>
      </span>
    </div>
  </div>
</a>
