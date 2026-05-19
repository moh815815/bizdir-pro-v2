<script>
  export let data;
  const { listing } = data;

  const priceLabel = { '$': 'اقتصادي', '$$': 'متوسط', '$$$': 'مرتفع', '$$$$': 'فاخر' };
  const stars = (r) => Array.from({ length: 5 }, (_, i) => i + 1 <= Math.round(r));
</script>

<svelte:head>
  <title>{listing.name} — BizDir Pro</title>
  <meta name="description" content={listing.description} />
</svelte:head>

<!-- Hero image -->
<div class="relative h-72 sm:h-96 bg-slate-900 overflow-hidden">
  <img src={listing.image} alt={listing.name} class="w-full h-full object-cover opacity-70" />
  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent"></div>

  <!-- Breadcrumb -->
  <div class="absolute top-4 right-4 flex items-center gap-2 font-arabic text-sm text-white/70">
    <a href="/" class="hover:text-white">الرئيسية</a>
    <span>/</span>
    <a href="/directory" class="hover:text-white">الدليل</a>
    <span>/</span>
    <span class="text-white">{listing.name}</span>
  </div>

  <!-- Bottom title overlay -->
  <div class="absolute bottom-6 right-6 left-6">
    <div class="flex flex-wrap gap-2 mb-3">
      {#if listing.verified}
        <span class="px-2.5 py-1 bg-emerald-500 text-white text-xs font-arabic rounded-full">✓ موثّق</span>
      {/if}
      {#if listing.featured}
        <span class="px-2.5 py-1 bg-gold-500 text-white text-xs font-arabic rounded-full">⭐ مميّز</span>
      {/if}
      <span class="px-2.5 py-1 bg-white/20 text-white text-xs font-arabic rounded-full backdrop-blur-sm">{listing.subcategory}</span>
    </div>
    <h1 class="font-arabic font-black text-3xl sm:text-4xl text-white mb-1">{listing.name}</h1>
    <p class="font-arabic text-white/70 text-sm">{listing.nameEn}</p>
  </div>
</div>

<!-- Content -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">

    <!-- Main -->
    <div class="lg:col-span-2 space-y-8">

      <!-- About -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
        <h2 class="font-arabic font-bold text-xl text-slate-900 mb-4">نبذة عن {listing.name}</h2>
        <p class="font-arabic text-slate-600 leading-relaxed mb-4">{listing.description}</p>
        <p class="font-arabic text-slate-400 text-sm italic">{listing.descriptionEn}</p>
      </div>

      <!-- Services -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
        <h2 class="font-arabic font-bold text-xl text-slate-900 mb-5">الخدمات المقدّمة</h2>
        <div class="flex flex-wrap gap-3">
          {#each listing.services as service}
            <span class="px-4 py-2 bg-gold-50 border border-gold-200 text-gold-800 font-arabic text-sm rounded-xl">
              {service}
            </span>
          {/each}
        </div>
      </div>

      <!-- Tags -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-7">
        <h2 class="font-arabic font-bold text-xl text-slate-900 mb-5">الوسوم</h2>
        <div class="flex flex-wrap gap-2">
          {#each listing.tags as tag}
            <a
              href="/directory?query={tag}"
              class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 font-arabic text-sm rounded-lg transition-colors"
            >
              #{tag}
            </a>
          {/each}
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="space-y-5">

      <!-- Rating card -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="font-arabic text-slate-500 text-sm">التقييم العام</span>
          <span class="font-display text-4xl font-bold text-slate-900">{listing.rating}</span>
        </div>
        <div class="flex gap-1 mb-2">
          {#each stars(listing.rating) as filled}
            <span class="text-xl {filled ? 'text-gold-400' : 'text-slate-200'}">★</span>
          {/each}
        </div>
        <p class="font-arabic text-slate-400 text-xs">{listing.reviewCount} تقييم مسجّل</p>
      </div>

      <!-- Info card -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-4">
        <h3 class="font-arabic font-bold text-slate-900 border-b border-slate-50 pb-3">معلومات الاتصال</h3>

        <div class="flex items-start gap-3">
          <span class="text-lg shrink-0">📍</span>
          <div>
            <p class="font-arabic text-sm font-medium text-slate-700">{listing.city}</p>
            <p class="font-arabic text-xs text-slate-400">{listing.address}</p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-lg">📞</span>
          <a href="tel:{listing.phone}" class="font-arabic text-sm text-gold-600 hover:underline">{listing.phone}</a>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-lg">📧</span>
          <a href="mailto:{listing.email}" class="font-arabic text-sm text-gold-600 hover:underline break-all">{listing.email}</a>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-lg">🌐</span>
          <a href={listing.website} target="_blank" rel="noopener noreferrer" class="font-arabic text-sm text-gold-600 hover:underline break-all">{listing.website.replace('https://', '')}</a>
        </div>

        <div class="flex items-center gap-3">
          <span class="text-lg">🕐</span>
          <p class="font-arabic text-sm text-slate-600">{listing.openHours}</p>
        </div>
      </div>

      <!-- Price -->
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 class="font-arabic font-bold text-slate-900 mb-3">نطاق الأسعار</h3>
        <div class="flex items-center gap-3">
          <span class="text-2xl font-bold text-gold-600">{listing.priceRange}</span>
          <span class="font-arabic text-slate-600 text-sm">{priceLabel[listing.priceRange]}</span>
        </div>
        {#if listing.priceMin && listing.priceMax}
          <p class="font-arabic text-slate-400 text-xs mt-2">
            من {listing.priceMin.toLocaleString('ar')} إلى {listing.priceMax.toLocaleString('ar')} ر.س
          </p>
        {/if}
      </div>

      <!-- Established -->
      <div class="bg-slate-900 rounded-2xl p-6 text-center">
        <p class="font-arabic text-slate-400 text-xs mb-1">تأسست عام</p>
        <p class="font-display text-3xl font-bold text-gold-400">{listing.established}</p>
        <p class="font-arabic text-slate-400 text-xs mt-1">{new Date().getFullYear() - listing.established} سنة خبرة</p>
      </div>

      <a
        href="/contact"
        class="w-full flex items-center justify-center gap-2 px-5 py-4 bg-gold-600 hover:bg-gold-700 text-white font-arabic font-bold rounded-xl shadow-lg transition-all hover:scale-105"
      >
        تواصل الآن ✉️
      </a>
    </div>
  </div>
</div>
