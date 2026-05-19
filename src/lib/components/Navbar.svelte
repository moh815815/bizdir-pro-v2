<script>
  import { page } from '$app/stores';
  let mobileOpen = false;

  const links = [
    { href: '/',           label: 'الرئيسية' },
    { href: '/directory',  label: 'الدليل'   },
    { href: '/about',      label: 'من نحن'   },
    { href: '/contact',    label: 'اتصل بنا' },
  ];

</script>

<header class="fixed top-0 inset-x-0 z-50 transition-all duration-300">
  <div class="glass border-b border-gold-200/40 shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <span class="text-white font-display font-bold text-sm">B</span>
        </div>
        <span class="font-arabic font-bold text-slate-900 text-lg tracking-tight">
          BizDir<span class="text-gold-600">Pro</span>
        </span>
      </a>

      <!-- Desktop Links -->
      <ul class="hidden md:flex items-center gap-1">
        {#each links as link}
          <li>
            <a
              href={link.href}
              class="px-4 py-2 rounded-lg font-arabic text-sm font-medium transition-all duration-200
                {$page.url.pathname === link.href
                  ? 'text-gold-700 bg-gold-50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}"
            >
              {link.label}
            </a>
          </li>
        {/each}
      </ul>

      <!-- CTA + Mobile Toggle -->
      <div class="flex items-center gap-3">
        <a href="/admin" class="hidden md:inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs font-arabic font-medium rounded-lg transition-all duration-200">
          <span>⚙️</span><span>الأدمن</span>
        </a>
        <a href="/directory" class="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-600 hover:bg-gold-700 text-white text-sm font-arabic font-medium rounded-lg shadow-md hover:shadow-gold-300/40 transition-all duration-200">
          <span>استعرض الدليل</span>
          <span class="text-xs">←</span>
        </a>
        <button
          class="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-slate-100 transition"
          on:click={() => mobileOpen = !mobileOpen}
          aria-label="Toggle menu"
        >
          <span class="w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 {mobileOpen ? 'rotate-45 translate-y-2' : ''}"></span>
          <span class="w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 {mobileOpen ? 'opacity-0' : ''}"></span>
          <span class="w-5 h-0.5 bg-slate-700 rounded transition-all duration-200 {mobileOpen ? '-rotate-45 -translate-y-2' : ''}"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    {#if mobileOpen}
      <div class="md:hidden px-4 pb-4 border-t border-slate-100">
        {#each links as link}
          <a
            href={link.href}
            class="block px-4 py-3 font-arabic text-sm font-medium rounded-lg my-1 transition
              {$page.url.pathname === link.href
                ? 'text-gold-700 bg-gold-50'
                : 'text-slate-700 hover:bg-slate-50'}"
            on:click={() => mobileOpen = false}
          >
            {link.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</header>

<!-- Spacer -->
<div class="h-16"></div>
