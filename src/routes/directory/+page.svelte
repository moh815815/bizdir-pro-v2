<script>
  import { page } from '$app/stores';
  import { listings, categories, cities, priceRanges, searchListings } from '$lib/data/store.js';
  import ListingCard from '$lib/components/ListingCard.svelte';

  // Reactive filter state
  let query      = '';
  let category   = '';
  let city       = '';
  let priceRange = '';
  let sortBy     = 'rating';

  // Apply search/filters
  $: results = (() => {
    let r = searchListings({ query, category, city, priceRange });
    if (sortBy === 'rating')  r = [...r].sort((a,b) => b.rating - a.rating);
    if (sortBy === 'reviews') r = [...r].sort((a,b) => b.reviewCount - a.reviewCount);
    if (sortBy === 'name')    r = [...r].sort((a,b) => a.name.localeCompare(b.name, 'ar'));
    return r;
  })();

  function reset() {
    query = ''; category = ''; city = ''; priceRange = ''; sortBy = 'rating';
  }

  $: hasFilters = query || category || city || priceRange;
</script>

<svelte:head>
  <title>الدليل التجاري — BizDir Pro</title>
  <meta name="description" content="ابحث وفلتر بين مئات الأعمال التجارية." />
</svelte:head>

<!-- Hero strip -->
<div class="bg-slate-950 text-white py-14">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 class="font-arabic font-black text-4xl sm:text-5xl mb-3">الدليل التجاري</h1>
    <p class="font-arabic text-slate-400 text-lg">ابحث بين <strong class="text-gold-400">{listings.length}</strong> سجل تجاري موثّق</p>
  </div>
</div>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div class="flex flex-col lg:flex-row gap-8">

    <!-- ── SIDEBAR FILTERS ──────────────────────────────────────────────────── -->
    <aside class="w-full lg:w-72 shrink-0">
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-20">
        <div class="flex items-center justify-between mb-5">
          <h2 class="font-arabic font-bold text-slate-900">الفلاتر</h2>
          {#if hasFilters}
            <button on:click={reset} class="text-xs font-arabic text-gold-600 hover:underline">مسح الكل</button>
          {/if}
        </div>

        <!-- Search -->
        <div class="mb-5">
          <label class="block font-arabic text-sm font-medium text-slate-700 mb-2">كلمة البحث</label>
          <input
            type="text"
            bind:value={query}
            placeholder="شركة، خدمة، وسم..."
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition"
          />
        </div>

        <!-- Category -->
        <div class="mb-5">
          <label class="block font-arabic text-sm font-medium text-slate-700 mb-2">التصنيف</label>
          <select bind:value={category} class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition bg-white">
            <option value="">جميع التصنيفات</option>
            {#each categories as cat}
              <option value={cat.id}>{cat.icon} {cat.name}</option>
            {/each}
          </select>
        </div>

        <!-- City -->
        <div class="mb-5">
          <label class="block font-arabic text-sm font-medium text-slate-700 mb-2">المدينة</label>
          <select bind:value={city} class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition bg-white">
            <option value="">جميع المدن</option>
            {#each cities as c}
              <option value={c}>{c}</option>
            {/each}
          </select>
        </div>

        <!-- Price Range -->
        <div class="mb-5">
          <label class="block font-arabic text-sm font-medium text-slate-700 mb-2">نطاق السعر</label>
          <div class="flex gap-2 flex-wrap">
            {#each priceRanges as pr}
              <button
                on:click={() => priceRange = priceRange === pr ? '' : pr}
                class="px-3 py-1.5 rounded-lg border text-sm font-medium transition
                  {priceRange === pr
                    ? 'bg-gold-600 border-gold-600 text-white'
                    : 'border-slate-200 text-slate-600 hover:border-gold-300'}"
              >
                {pr}
              </button>
            {/each}
          </div>
        </div>

        <!-- Sort -->
        <div>
          <label class="block font-arabic text-sm font-medium text-slate-700 mb-2">الترتيب</label>
          <select bind:value={sortBy} class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition bg-white">
            <option value="rating">الأعلى تقييماً</option>
            <option value="reviews">الأكثر تقييمات</option>
            <option value="name">الاسم أبجدياً</option>
          </select>
        </div>
      </div>
    </aside>

    <!-- ── RESULTS ───────────────────────────────────────────────────────────── -->
    <div class="flex-1 min-w-0">
      <div class="flex items-center justify-between mb-6">
        <p class="font-arabic text-slate-500 text-sm">
          عرض <strong class="text-slate-900">{results.length}</strong> نتيجة
          {#if hasFilters}<span class="text-gold-600"> (مفلترة)</span>{/if}
        </p>
      </div>

      {#if results.length === 0}
        <div class="text-center py-24 bg-white rounded-2xl border border-slate-100">
          <div class="text-5xl mb-4">🔍</div>
          <h3 class="font-arabic font-bold text-slate-800 text-xl mb-2">لا توجد نتائج</h3>
          <p class="font-arabic text-slate-500 mb-6">جرّب تغيير معايير البحث أو</p>
          <button on:click={reset} class="px-5 py-2.5 bg-gold-600 text-white font-arabic font-medium rounded-xl hover:bg-gold-700 transition">
            مسح الفلاتر
          </button>
        </div>
      {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {#each results as listing (listing.id)}
            <ListingCard {listing} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
