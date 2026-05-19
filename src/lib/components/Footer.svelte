<script>
  import { siteConfig } from '$lib/data/store.js';
  const year = new Date().getFullYear();
</script>

<footer class="bg-slate-950 text-slate-300 mt-24">
  <!-- Main footer -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

    <!-- Brand -->
    <div class="md:col-span-2">
      <div class="flex items-center gap-2 mb-4">
        <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
          <span class="text-white font-display font-bold">B</span>
        </div>
        <span class="font-arabic font-bold text-white text-xl">BizDir<span class="text-gold-400">Pro</span></span>
      </div>
      <p class="font-arabic text-slate-400 text-sm leading-relaxed max-w-xs">
        {siteConfig.description}
      </p>
      <!-- Social -->
      <div class="flex items-center gap-3 mt-6">
        {#each Object.entries(siteConfig.contact.social) as [name, url]}
          <a href={url} target="_blank" rel="noopener noreferrer"
            class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gold-600 flex items-center justify-center text-sm transition-colors duration-200"
            aria-label={name}>
            {#if name === 'twitter'}🐦
            {:else if name === 'linkedin'}💼
            {:else if name === 'instagram'}📸
            {/if}
          </a>
        {/each}
      </div>
    </div>

    <!-- Links -->
    <div>
      <h4 class="font-arabic font-bold text-white mb-4 text-sm uppercase tracking-wider">الصفحات</h4>
      <ul class="space-y-2">
        {#each [['/', 'الرئيسية'], ['/directory', 'الدليل'], ['/about', 'من نحن'], ['/contact', 'اتصل بنا']] as [href, label]}
          <li><a {href} class="font-arabic text-sm text-slate-400 hover:text-gold-400 transition-colors">{label}</a></li>
        {/each}
      </ul>
    </div>

    <!-- Contact -->
    <div>
      <h4 class="font-arabic font-bold text-white mb-4 text-sm uppercase tracking-wider">تواصل معنا</h4>
      <ul class="space-y-3 font-arabic text-sm text-slate-400">
        <li class="flex items-center gap-2">📧 <a href="mailto:{siteConfig.contact.email}" class="hover:text-gold-400 transition-colors">{siteConfig.contact.email}</a></li>
        <li class="flex items-center gap-2">📞 <span>{siteConfig.contact.phone}</span></li>
        <li class="flex items-center gap-2">📍 <span>{siteConfig.contact.address}</span></li>
      </ul>
    </div>
  </div>

  <!-- Bottom bar -->
  <div class="border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p class="font-arabic text-xs text-slate-500">© {year} BizDir Pro — جميع الحقوق محفوظة</p>
      <p class="font-arabic text-xs text-slate-600">مبني بـ SvelteKit & Tailwind CSS ❤️</p>
    </div>
  </div>
</footer>
