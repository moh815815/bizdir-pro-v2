<script>
  import { categories, getFeaturedListings } from '$lib/data/store.js';
  import ListingCard from '$lib/components/ListingCard.svelte';

  const featured = getFeaturedListings(6);
  const stats = [
    { value: '600+', label: 'شركة مسجّلة' },
    { value: '10',   label: 'تصنيف رئيسي' },
    { value: '3',    label: 'مدن مغطّاة'  },
    { value: '4.8',  label: 'تقييم متوسط' },
  ];
</script>

<svelte:head>
  <title>BizDir Pro — دليل الأعمال الأول</title>
  <meta name="description" content="دليل أعمال متكامل يجمع أفضل الشركات والمحلات التجارية في المنطقة." />
</svelte:head>

<!-- ─── HERO ──────────────────────────────────────────────────────────────── -->
<section class="relative overflow-hidden bg-slate-950 text-white min-h-[92vh] flex flex-col justify-center noise">

  <!-- Background mesh -->
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4"></div>
    <!-- Grid lines -->
    <svg class="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-300 text-sm font-arabic mb-8 animate-fade-up">
      <span class="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
      الدليل التجاري الأكثر شمولاً في المنطقة
    </div>

    <h1 class="font-arabic font-black text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up animate-delay-100">
      اكتشف أفضل
      <span class="block text-gold-gradient font-display italic mt-1">الأعمال التجارية</span>
    </h1>

    <p class="font-arabic text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animate-delay-200">
      أكثر من 600 شركة ومتجر في قطاعات متنوعة — ابحث وقارن وتواصل مع أفضل مزوّدي الخدمات.
    </p>

    <!-- Search bar -->
    <div class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-12 animate-fade-up animate-delay-300">
      <input
        type="text"
        placeholder="ابحث عن شركة، خدمة، أو تصنيف..."
        class="flex-1 px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 font-arabic text-sm focus:outline-none focus:border-gold-500 focus:bg-white/15 backdrop-blur-sm transition"
      />
      <a href="/directory" class="px-6 py-4 bg-gold-600 hover:bg-gold-500 text-white font-arabic font-bold rounded-xl shadow-lg shadow-gold-900/30 transition-all hover:scale-105 whitespace-nowrap">
        بحث في الدليل
      </a>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-up animate-delay-400">
      {#each stats as stat}
        <div class="glass rounded-xl p-4 bg-white/5 border border-white/10">
          <p class="font-display text-3xl font-bold text-gold-400">{stat.value}</p>
          <p class="font-arabic text-slate-400 text-xs mt-1">{stat.label}</p>
        </div>
      {/each}
    </div>
  </div>

  <!-- Wave divider -->
  <div class="absolute bottom-0 inset-x-0">
    <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-16 fill-[#f8f7f4]">
      <path d="M0,80 C360,0 1080,80 1440,0 L1440,80 Z"/>
    </svg>
  </div>
</section>

<!-- ─── CATEGORIES ─────────────────────────────────────────────────────────── -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div class="text-center mb-12">
    <h2 class="font-arabic font-black text-3xl sm:text-4xl text-slate-900 mb-3">تصفّح حسب التصنيف</h2>
    <p class="font-arabic text-slate-500">اختر من {categories.length} تصنيف رئيسي</p>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
    {#each categories as cat}
      <a
        href="/directory?category={cat.id}"
        class="group flex flex-col items-center gap-3 p-5 bg-white rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-lg shadow-sm transition-all duration-300 hover:-translate-y-1 text-center"
      >
        <span class="text-3xl group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
        <div>
          <p class="font-arabic font-bold text-slate-800 text-sm">{cat.name}</p>
          <p class="font-arabic text-slate-400 text-xs mt-0.5">{cat.count} سجل</p>
        </div>
      </a>
    {/each}
  </div>
</section>

<!-- ─── FEATURED LISTINGS ──────────────────────────────────────────────────── -->
<section class="bg-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-end justify-between mb-10">
      <div>
        <h2 class="font-arabic font-black text-3xl sm:text-4xl text-slate-900 mb-2">أبرز الأعمال</h2>
        <p class="font-arabic text-slate-500">شركات موثّقة ومميّزة بتقييمات عالية</p>
      </div>
      <a href="/directory" class="hidden sm:inline-flex items-center gap-1 font-arabic text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors">
        عرض الكل ←
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each featured as listing}
        <ListingCard {listing} />
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/directory" class="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-arabic font-bold rounded-xl shadow-lg transition-all hover:scale-105">
        استعرض جميع الأعمال المسجّلة
      </a>
    </div>
  </div>
</section>

<!-- ─── CTA BANNER ─────────────────────────────────────────────────────────── -->
<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 sm:p-16 text-center noise">
    <div class="absolute top-0 right-0 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl pointer-events-none"></div>
    <h2 class="font-arabic font-black text-3xl sm:text-4xl mb-4 relative">هل أعمالك مدرجة في الدليل؟</h2>
    <p class="font-arabic text-slate-300 text-lg mb-8 max-w-lg mx-auto relative">انضم إلى مئات الشركات واحصل على تقييمات وعملاء جدد من خلال منصتنا.</p>
    <a href="/contact" class="inline-flex items-center gap-2 px-8 py-4 bg-gold-600 hover:bg-gold-500 text-white font-arabic font-bold rounded-xl shadow-xl shadow-gold-900/30 transition-all hover:scale-105 relative">
      سجّل عملك الآن ✨
    </a>
  </div>
</section>
