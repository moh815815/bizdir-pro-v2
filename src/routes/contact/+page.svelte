<script>
  import { siteConfig } from '$lib/data/store.js';

  let name = '', email = '', subject = '', message = '', sent = false, sending = false;

  async function handleSubmit() {
    if (!name || !email || !message) return;
    sending = true;
    // Simulate async submit
    await new Promise(r => setTimeout(r, 1200));
    sent = true;
    sending = false;
  }

  const contactItems = [
    { icon: '📧', label: 'البريد الإلكتروني', value: siteConfig.contact.email,   href: `mailto:${siteConfig.contact.email}`  },
    { icon: '📞', label: 'رقم الهاتف',        value: siteConfig.contact.phone,   href: `tel:${siteConfig.contact.phone}`      },
    { icon: '📍', label: 'العنوان',           value: siteConfig.contact.address, href: '#'                                    },
  ];
</script>

<svelte:head>
  <title>اتصل بنا — BizDir Pro</title>
  <meta name="description" content="تواصل مع فريق BizDir Pro لأي استفسار أو لتسجيل عملك." />
</svelte:head>

<!-- Hero -->
<section class="relative bg-slate-950 text-white overflow-hidden py-24 noise">
  <div class="absolute left-0 bottom-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    <span class="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 font-arabic text-sm mb-6">تواصل معنا</span>
    <h1 class="font-arabic font-black text-4xl sm:text-5xl lg:text-6xl mb-4">
      نسعد بالتواصل
      <span class="block text-gold-gradient font-display italic">معك دائماً</span>
    </h1>
    <p class="font-arabic text-slate-400 text-lg max-w-xl mx-auto">سواء كنت تريد تسجيل عملك أو لديك استفسار — فريقنا جاهز للمساعدة.</p>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">

    <!-- Contact Info -->
    <div class="lg:col-span-2 space-y-6">
      <div>
        <h2 class="font-arabic font-bold text-2xl text-slate-900 mb-2">معلومات التواصل</h2>
        <p class="font-arabic text-slate-500 text-sm leading-relaxed">نرد على جميع الاستفسارات خلال 24 ساعة في أيام العمل.</p>
      </div>

      {#each contactItems as item}
        <a href={item.href} class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all group">
          <div class="w-11 h-11 bg-gold-50 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-gold-100 transition-colors">
            {item.icon}
          </div>
          <div>
            <p class="font-arabic text-xs text-slate-400 mb-0.5">{item.label}</p>
            <p class="font-arabic font-medium text-slate-800 text-sm">{item.value}</p>
          </div>
        </a>
      {/each}

      <!-- FAQ teaser -->
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6">
        <h3 class="font-arabic font-bold mb-2">هل لديك سؤال شائع؟</h3>
        <p class="font-arabic text-slate-400 text-sm mb-4 leading-relaxed">تحقق من صفحة الأسئلة الشائعة قبل إرسال رسالتك.</p>
        <a href="/about" class="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-arabic text-sm font-medium transition-colors">
          اقرأ المزيد ←
        </a>
      </div>
    </div>

    <!-- Form -->
    <div class="lg:col-span-3">
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
        {#if sent}
          <div class="text-center py-12">
            <div class="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">✅</div>
            <h3 class="font-arabic font-bold text-2xl text-slate-900 mb-3">تم الإرسال بنجاح!</h3>
            <p class="font-arabic text-slate-500">سنتواصل معك قريباً على بريدك الإلكتروني.</p>
            <button on:click={() => { sent=false; name=''; email=''; subject=''; message=''; }} class="mt-6 px-5 py-2.5 bg-gold-600 text-white font-arabic font-medium rounded-xl hover:bg-gold-700 transition">
              إرسال رسالة أخرى
            </button>
          </div>
        {:else}
          <h2 class="font-arabic font-bold text-xl text-slate-900 mb-6">أرسل رسالتك</h2>

          <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block font-arabic text-sm font-medium text-slate-700 mb-1.5">الاسم الكامل *</label>
                <input type="text" bind:value={name} placeholder="أحمد محمد"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition" />
              </div>
              <div>
                <label class="block font-arabic text-sm font-medium text-slate-700 mb-1.5">البريد الإلكتروني *</label>
                <input type="email" bind:value={email} placeholder="email@example.com"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition" />
              </div>
            </div>

            <div>
              <label class="block font-arabic text-sm font-medium text-slate-700 mb-1.5">الموضوع</label>
              <select bind:value={subject} class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition bg-white">
                <option value="">اختر الموضوع</option>
                <option value="register">تسجيل عمل تجاري</option>
                <option value="edit">تعديل بيانات موجودة</option>
                <option value="partnership">شراكة تجارية</option>
                <option value="support">دعم فني</option>
                <option value="other">استفسار عام</option>
              </select>
            </div>

            <div>
              <label class="block font-arabic text-sm font-medium text-slate-700 mb-1.5">الرسالة *</label>
              <textarea bind:value={message} rows="5" placeholder="اكتب رسالتك هنا..."
                class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-gold-400 focus:outline-none font-arabic text-sm transition resize-none"></textarea>
            </div>

            <button
              on:click={handleSubmit}
              disabled={!name || !email || !message || sending}
              class="w-full py-4 bg-gold-600 hover:bg-gold-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-arabic font-bold rounded-xl shadow-lg shadow-gold-200 transition-all duration-200 flex items-center justify-center gap-2"
            >
              {#if sending}
                <span class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                <span>جاري الإرسال...</span>
              {:else}
                <span>إرسال الرسالة ✉️</span>
              {/if}
            </button>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
