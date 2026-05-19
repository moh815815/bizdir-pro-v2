<script>
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 — الصفحة غير موجودة</title>
</svelte:head>

<div class="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
  <div class="relative mb-8">
    <span class="font-display font-black text-[140px] sm:text-[180px] text-slate-100 leading-none select-none">404</span>
    <div class="absolute inset-0 flex items-center justify-center">
      <span class="text-6xl">🔍</span>
    </div>
  </div>

  <h1 class="font-arabic font-black text-3xl text-slate-900 mb-3">الصفحة غير موجودة</h1>
  <p class="font-arabic text-slate-500 text-lg mb-8 max-w-md">
    عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
  </p>

  <div class="flex flex-col sm:flex-row gap-3">
    <a href="/" class="px-6 py-3 bg-gold-600 hover:bg-gold-700 text-white font-arabic font-bold rounded-xl shadow-lg transition-all hover:scale-105">
      العودة للرئيسية
    </a>
    <a href="/directory" class="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-arabic font-bold rounded-xl transition-all">
      استعرض الدليل
    </a>
  </div>
</div>
