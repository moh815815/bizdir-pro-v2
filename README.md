<div align="center">

# 🏢 BizDir Pro

### دليل الأعمال الاحترافي | Professional Business Directory

[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=for-the-badge&logo=svelte)](https://kit.svelte.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Ready-F38020?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com)
[![Static Export](https://img.shields.io/badge/Static-Export-brightgreen?style=for-the-badge)](https://kit.svelte.dev/docs/adapter-static)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**قالب احترافي جاهز للإنتاج لبناء دليل أعمال أو منصة B2B**
*A production-ready boilerplate for building business directories or B2B platforms*

[🚀 Demo](#) • [📖 الوثائق](#installation) • [🐛 الإبلاغ عن خطأ](issues) • [💡 طلب ميزة](issues)

---

</div>

## 📋 الفهرس | Table of Contents

- [مميزات المشروع | Features](#-مميزات-المشروع--features)
- [هيكل المشروع | Project Structure](#-هيكل-المشروع--project-structure)
- [التثبيت والتشغيل | Installation](#-التثبيت-والتشغيل--installation)
- [إعداد Cloudflare | Cloudflare Setup](#-إعداد-cloudflare--cloudflare-setup)
- [التخصيص | Customization](#-التخصيص--customization)
- [الصفحات | Pages](#-الصفحات--pages)
- [التقنيات المستخدمة | Tech Stack](#-التقنيات-المستخدمة--tech-stack)

---

## ✨ مميزات المشروع | Features

### 🇸🇦 بالعربية

| الميزة | الوصف |
|--------|-------|
| 📁 **هيكل منظّم** | مجلدات احترافية جاهزة للمشاريع الكبيرة |
| 🗃️ **ملف بيانات مركزي** | `store.js` يحتوي على نموذج بيانات ضخم قابل للتعديل |
| 🔍 **بحث وفلترة متقدمة** | بحث نصي + فلاتر متعددة بدون مكتبات خارجية |
| 🏠 **صفحة رئيسية احترافية** | Hero + تصنيفات + أبرز الإعلانات |
| 📂 **دليل تجاري كامل** | صفحة بحث وفلترة ديناميكية |
| 🏪 **صفحة تفاصيل ديناميكية** | صفحة تفاصيل لكل سجل تجاري |
| ℹ️ **صفحة من نحن** | تصميم عصري مع فريق وقيم |
| 📬 **صفحة اتصل بنا** | نموذج تواصل تفاعلي |
| ☁️ **Cloudflare Ready** | إعدادات adapter-static مضبوطة |
| 📱 **Responsive** | تصميم متجاوب لجميع الأجهزة |
| 🎨 **RTL Native** | دعم كامل للغة العربية واتجاه النص |

### 🇬🇧 In English

| Feature | Description |
|---------|-------------|
| 📁 **Pro Structure** | Professional folder structure ready for large projects |
| 🗃️ **Central Data Store** | `store.js` with rich sample data, easy to edit |
| 🔍 **Advanced Search** | Full-text search + multi-filter system, no extra libraries |
| 🏠 **Landing Page** | Hero section + categories grid + featured listings |
| 📂 **Directory Page** | Dynamic search and filter page |
| 🏪 **Detail Pages** | Dynamic route for each business listing |
| ℹ️ **About Page** | Modern design with team & values sections |
| 📬 **Contact Page** | Interactive contact form |
| ☁️ **Cloudflare Ready** | Pre-configured adapter-static with fallback |
| 📱 **Fully Responsive** | Mobile-first design |
| 🎨 **RTL Native** | Full Arabic language & RTL text support |

---

## 📁 هيكل المشروع | Project Structure

```
bizdir-pro/
├── src/
│   ├── app.html                    # HTML template
│   ├── app.css                     # Global styles + Tailwind
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Navbar.svelte       # Responsive navigation
│   │   │   ├── Footer.svelte       # Site footer
│   │   │   └── ListingCard.svelte  # Reusable business card
│   │   └── data/
│   │       └── store.js            # ⭐ Central data store
│   └── routes/
│       ├── +layout.js              # prerender = true
│       ├── +layout.svelte          # Shared layout
│       ├── +page.svelte            # Home page
│       ├── +error.svelte           # 404 page
│       ├── directory/
│       │   └── +page.svelte        # Directory with search/filter
│       ├── item/[slug]/
│       │   ├── +page.js            # Data loader + static entries
│       │   └── +page.svelte        # Business detail page
│       ├── about/
│       │   └── +page.svelte        # About us page
│       └── contact/
│           └── +page.svelte        # Contact page
├── static/
│   └── favicon.png
├── svelte.config.js                # ☁️ adapter-static config
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 التثبيت والتشغيل | Installation

### المتطلبات | Prerequisites
- Node.js `>= 18`
- npm أو pnpm أو yarn

### خطوات التثبيت | Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bizdir-pro.git
cd bizdir-pro

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview the build
npm run preview
```

بعد التثبيت، افتح المتصفح على: http://localhost:5173

---

## ☁️ إعداد Cloudflare | Cloudflare Setup

### الرفع على Cloudflare Pages

1. **ادفع الكود على GitHub**
```bash
git init
git add .
git commit -m "Initial commit: BizDir Pro"
git remote add origin https://github.com/username/bizdir-pro.git
git push -u origin main
```

2. **أنشئ مشروعاً في Cloudflare Pages**
   - اذهب إلى [pages.cloudflare.com](https://pages.cloudflare.com)
   - اربط مستودع GitHub الخاص بك
   - اضبط الإعدادات التالية:

| الإعداد | القيمة |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `build` |
| Node.js version | `18` |

3. **ملف `svelte.config.js`** مضبوط مسبقاً بـ:
```js
adapter: adapter({
  fallback: '404.html'  // ✅ ضروري لـ Cloudflare Pages
})
```

4. **ملف `+layout.js`** يحتوي على:
```js
export const prerender = true;  // ✅ يولّد صفحات ستاتيكية
```

---

## 🎨 التخصيص | Customization

### تعديل البيانات | Edit Data

كل البيانات في ملف واحد: `src/lib/data/store.js`

```js
// تعديل معلومات الموقع
export const siteConfig = {
  name: 'اسم موقعك',
  tagline: 'شعارك هنا',
  // ...
};

// إضافة تصنيف جديد
export const categories = [
  { id: 'new-cat', name: 'تصنيف جديد', icon: '🆕', color: '#ff0000', count: 0 },
  // ...
];

// إضافة سجل تجاري جديد
export const listings = [
  {
    id: 'unique-id',
    slug: 'business-slug',        // يُستخدم في URL
    name: 'اسم العمل',
    category: 'tech',             // يجب أن يطابق id في categories
    // ...
  }
];
```

### تعديل الألوان | Edit Colors

في `tailwind.config.js`:
```js
colors: {
  gold: { 600: '#YOUR_COLOR' }  // لون العلامة التجارية
}
```

---

## 📄 الصفحات | Pages

| المسار | الوصف |
|--------|-------|
| `/` | الصفحة الرئيسية |
| `/directory` | الدليل مع بحث وفلترة |
| `/item/[slug]` | تفاصيل السجل التجاري |
| `/about` | من نحن |
| `/contact` | اتصل بنا |

---

## 🛠️ التقنيات المستخدمة | Tech Stack

| التقنية | الإصدار | الغرض |
|---------|---------|-------|
| [SvelteKit](https://kit.svelte.dev) | 2.x | إطار العمل الرئيسي |
| [Svelte](https://svelte.dev) | 4.x | مكتبة UI |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | التنسيق |
| [Vite](https://vitejs.dev) | 5.x | بيئة التطوير |
| [@sveltejs/adapter-static](https://github.com/sveltejs/kit/tree/main/packages/adapter-static) | 3.x | توليد ملفات ستاتيكية |

---

## 📝 الترخيص | License

هذا المشروع مرخّص تحت رخصة **MIT** — يمكنك استخدامه بحرية في مشاريعك الشخصية والتجارية.

This project is licensed under the **MIT License** — free to use in personal and commercial projects.

---

<div align="center">

صُنع بـ ❤️ في المملكة العربية السعودية • Made with ❤️ in Saudi Arabia

**⭐ إذا أعجبك المشروع، لا تنسَ النجمة! | Star this repo if you found it useful!**

</div>
