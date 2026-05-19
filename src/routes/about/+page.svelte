<script>
  const team = [
    { name: 'أحمد الزهراني', role: 'المؤسس والرئيس التنفيذي', avatar: 'https://i.pravatar.cc/150?img=11' },
    { name: 'سارة المالكي',  role: 'مديرة التسويق',             avatar: 'https://i.pravatar.cc/150?img=5'  },
    { name: 'خالد العتيبي',  role: 'مدير التقنية',              avatar: 'https://i.pravatar.cc/150?img=15' },
    { name: 'نورة القحطاني', role: 'مديرة علاقات العملاء',      avatar: 'https://i.pravatar.cc/150?img=20' },
  ];

  const values = [
    { icon: '🎯', title: 'الدقة',       desc: 'نتحقق من كل سجل يُضاف للدليل لضمان جودة المعلومات.' },
    { icon: '🤝', title: 'الثقة',       desc: 'بناء علاقات طويلة الأمد مع الشركات المسجّلة والمستخدمين.' },
    { icon: '🚀', title: 'الابتكار',    desc: 'نواكب أحدث تقنيات البحث والفلترة لتجربة استخدام سلسة.' },
    { icon: '🌍', title: 'التوسّع',     desc: 'رؤيتنا أن نكون المرجع الأول للأعمال في المنطقة العربية.' },
  ];
</script>

<svelte:head>
  <title>من نحن — BizDir Pro</title>
  <meta name="description" content="تعرف على قصة BizDir Pro ورؤيتنا لمستقبل الدليل التجاري الرقمي." />
</svelte:head>

<!-- Hero -->
<section class="relative bg-slate-950 text-white overflow-hidden py-28 noise">
  <div class="absolute inset-0 pointer-events-none">
    <div class="absolute right-0 top-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
  </div>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
    <span class="inline-block px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 font-arabic text-sm mb-6">من نحن</span>
    <h1 class="font-arabic font-black text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight">
      نبني الجسر بين
      <span class="block text-gold-gradient font-display italic">الأعمال والعملاء</span>
    </h1>
    <p class="font-arabic text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
      BizDir Pro منصة تجمع أفضل الشركات والمحلات التجارية في مكان واحد، مما يسهّل على العملاء إيجاد ما يحتاجون.
    </p>
  </div>
</section>

<!-- Story -->
<section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div>
      <h2 class="font-arabic font-black text-3xl text-slate-900 mb-5">قصتنا</h2>
      <div class="space-y-4 font-arabic text-slate-600 leading-relaxed">
        <p>بدأت فكرة BizDir Pro عام 2022 حين لاحظنا صعوبة وصول العملاء إلى الشركات الموثوقة في منطقتنا. كانت المعلومات مبعثرة وغير موثوقة.</p>
        <p>قررنا بناء منصة تجمع المعلومات الصحيحة والمحدّثة لآلاف الأعمال التجارية، مع نظام تحقق صارم لضمان دقة البيانات.</p>
        <p>اليوم، يثق بنا أكثر من 600 شركة وعشرات الآلاف من المستخدمين شهرياً.</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      {#each [['600+','شركة مسجّلة'],['50K+','زيارة شهرية'],['4.8','تقييم المستخدمين'],['2022','سنة التأسيس']] as [v,l]}
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
          <p class="font-display text-3xl font-bold text-gold-600">{v}</p>
          <p class="font-arabic text-slate-500 text-sm mt-1">{l}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Values -->
<section class="bg-white py-20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="font-arabic font-black text-3xl sm:text-4xl text-slate-900 mb-3">قيمنا</h2>
      <p class="font-arabic text-slate-500">المبادئ التي تقود كل قرار نتخذه</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each values as v}
        <div class="group p-7 rounded-2xl border border-slate-100 hover:border-gold-200 hover:shadow-lg transition-all duration-300 bg-white text-center">
          <span class="text-4xl block mb-4 group-hover:scale-110 transition-transform">{v.icon}</span>
          <h3 class="font-arabic font-bold text-slate-900 text-lg mb-3">{v.title}</h3>
          <p class="font-arabic text-slate-500 text-sm leading-relaxed">{v.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Team -->
<section class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div class="text-center mb-12">
    <h2 class="font-arabic font-black text-3xl sm:text-4xl text-slate-900 mb-3">فريق العمل</h2>
    <p class="font-arabic text-slate-500">العقول التي تقف خلف المنصة</p>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {#each team as member}
      <div class="text-center group">
        <div class="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 ring-2 ring-transparent group-hover:ring-gold-400 transition-all shadow-md">
          <img src={member.avatar} alt={member.name} class="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        </div>
        <h3 class="font-arabic font-bold text-slate-900">{member.name}</h3>
        <p class="font-arabic text-gold-600 text-sm mt-1">{member.role}</p>
      </div>
    {/each}
  </div>
</section>
